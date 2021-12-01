import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, changeFilter } from "./phonebook-actions"

const items = createReducer([], {
  [addContact]: (state, { payload }) => {
    if (state.find((item) => item.name.toLowerCase() === payload.name.toLowerCase())) {
        alert(`${payload.name} is already in contacts.`);
        return state
    }
      return [...state, payload];
  },
  [deleteContact]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload)
  }
})

const filter = createReducer('', {
  [changeFilter]: (state, { payload }) => (payload)
})

export default combineReducers({
  items,
  filter
})