export const getItems = state => state.phonebook.items;

export const getFilter = state => state.phonebook.filter;

export const getVisible = state => {
    return getItems(state).filter((contact) =>
            contact.name.toLowerCase().includes(getFilter(state).toLowerCase())
        );
}
 