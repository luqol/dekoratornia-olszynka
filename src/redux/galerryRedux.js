

// selectors

export const getAllGallery = state => state.gallery;

//actions

//const createActionName = actionName => `app/gallery/${actionName}`;

const galleryReducer = (statePart = [], action) => {
    switch (action.type) {
        default:
            return statePart;
    }
};

export default galleryReducer;