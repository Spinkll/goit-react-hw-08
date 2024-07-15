import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;

export const getIsLoading = (state) => state.contacts.isLoading;

export const getError = (state) => state.contacts.error;

export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filters.name;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter(
      (contact) =>
        typeof contact.name === "string" &&
        contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);
