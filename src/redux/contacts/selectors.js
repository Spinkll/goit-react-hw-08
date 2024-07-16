import { createSelector } from "@reduxjs/toolkit";
import { selectNumberFilter } from "../filters/slice";

export const getContacts = (state) => state.contacts.items;

export const getIsLoading = (state) => state.contacts.isLoading;

export const getError = (state) => state.contacts.error;

export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filters.name;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectNumberFilter],
  (contacts, nameFilter, numberFilter) => {
    const nameFilterLower = nameFilter.toLowerCase();
    const numberFilterLower = numberFilter.toLowerCase();

    return contacts.filter(
      (contact) =>
        (typeof contact.name === "string" &&
          contact.name.toLowerCase().includes(nameFilterLower)) ||
        (typeof contact.number === "string" &&
          contact.number.toLowerCase().includes(numberFilterLower))
    );
  }
);
