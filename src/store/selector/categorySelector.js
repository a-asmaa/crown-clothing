import { createSelector } from "reselect";
// memorize last value for reducer so will not rerender if its not changed 

export const selectCategoryReducer = (state) =>  state.categories

// createSelector(input , output selector)
export const selectCategories = createSelector(
        [selectCategoryReducer],
        (cat) => cat.categories 
)

export const categoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (cat) => cat.isLoading 
)

export const selectCategoryMap = createSelector(
    [selectCategories],
    (categories) => {    
        console.log("selector fired !!");
         return categories.reduce((acc, category) => {
        const {title, items} = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})}
)