import React, { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "../reducer/AppReducer";
import {GET_TRANSACTIONS, ADD_TRANSACTION, DELETE_TRANSACTION, TRANSACTION_ERROR} from '../constants'

const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getTransactions = async () => {
    try {
      const { data } = await axios.get("api/v1/transactions");

      dispatch({
        type: GET_TRANSACTIONS,
        payload: data.data,
      });
    } catch (err) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: err.response.data.error,
      });
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`api/v1/transactions/${id}`);
      dispatch({
        type: DELETE_TRANSACTION,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: err.response.data.error,
      });
    }

    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
    });
  };

  const addTransaction = async (transaction) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("api/v1/transactions", transaction, config);

      dispatch({
        type: ADD_TRANSACTION,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: err.response.data.error,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
