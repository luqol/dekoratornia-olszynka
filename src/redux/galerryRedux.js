

// selectors

export const getAllGallery = state => state.gallery;

export const getGalleryById = ({gallery}, id) =>  gallery.find( product => product.id === id);

//actions

//const createActionName = actionName => `app/gallery/${actionName}`;

const galleryReducer = (statePart = [], action) => {
    switch (action.type) {
        default:
            return statePart;
    }
};

export default galleryReducer;