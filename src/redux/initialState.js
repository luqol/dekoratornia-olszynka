const initialState = {
    gallery: [
        {
            id: '1',
            title: 'obrazek 1 ',
            shortDescription: 'Lorem Ipsum',
            description: 'tLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non convallis ligula. Suspendisse maximus egestas leo, et scelerisque sem pharetra eget. Mauris tempor orci a nunc consequat, ac bibendum orci mollis. Praesent consequat, turpis ac convallis placerat, lacus arcu sollicitudin ligula, in semper risus quam convallis tellus. Suspendisse potenti. Cras mattis massa a eros efficitur porta. Quisque tempor, quam vel auctor sollicitudin, quam nisl elementum tellus, nec scelerisque enim tellus non est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi sed lacus nec justo scelerisque dignissim a nec lorem. Pellentesque efficitur eros ac libero vestibulum, commodo finibus felis finibus. Donec quis dignissim mi, quis rutrum mauris. Etiam vulputate quam metus, vel elementum magna imperdiet vel. Quisque eget vestibulum urna. Quisque imperdiet id urna at dignissim.',
            mainImg: 'Image_1.png',
            images: [
                {
                    id: '1',
                    img: 'Image_1.png',
                },
                {
                    id: '2',
                    img: 'Image_2.png',
                },
                {
                    id: '3',
                    img: 'Image_6.png',
                },
                {
                    id: '4',
                    img: 'Image_7.png',
                },

            ],
            category: 'Renowacja figur',
        },
        {
            id: '2',
            title: 'Matka Boska Bolesna',
            shortDescription: 'Lorem Ipsum',
            description: 'Całkowita renowacja figury Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non convallis ligula. Suspendisse maximus egestas leo, et scelerisque sem pharetra eget. Mauris tempor orci a nunc consequat, ac bibendum orci mollis. Praesent consequat, turpis ac convallis placerat, lacus arcu sollicitudin ligula, in semper risus quam convallis tellus. Suspendisse potenti. Cras mattis massa a eros efficitur porta. Quisque tempor, quam vel auctor sollicitudin, quam nisl elementum tellus, nec scelerisque enim tellus non est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi sed lacus nec justo scelerisque dignissim a nec lorem. Pellentesque efficitur eros ac libero vestibulum, commodo finibus felis finibus. Donec quis dignissim mi, quis rutrum mauris. Etiam vulputate quam metus, vel elementum magna imperdiet vel. Quisque eget vestibulum urna. Quisque imperdiet id urna at dignissim.',
            mainImg: 'Image_2.png',
            images: [
                {
                    id: '1',
                    img: 'Image_2.png',
                },
                {
                    id: '2',
                    img: 'Image_9.png',
                },
                {
                    id: '3',
                    img: 'Image_6.png',
                },
                {
                    id: '4',
                    img: 'Image_7.png',
                },
                {
                    id: '5',
                    img: 'Image_8.png',
                },
                {
                    id: '6',
                    img: 'Image_1.png',
                },
            ],
            category: 'Renowacja figur',
        },
        {
            id: '3',
            title: 'drewienko ',
            shortDescription: 'Lorem Ipsum',
            description: 'test descriptionLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non convallis ligula. Suspendisse maximus egestas leo, et scelerisque sem pharetra eget. Mauris tempor orci a nunc consequat, ac bibendum orci mollis. Praesent consequat, turpis ac convallis placerat, lacus arcu sollicitudin ligula, in semper risus quam convallis tellus. Suspendisse potenti. Cras mattis massa a eros efficitur porta. Quisque tempor, quam vel auctor sollicitudin, quam nisl elementum tellus, nec scelerisque enim tellus non est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi sed lacus nec justo scelerisque dignissim a nec lorem. Pellentesque efficitur eros ac libero vestibulum, commodo finibus felis finibus. Donec quis dignissim mi, quis rutrum mauris. Etiam vulputate quam metus, vel elementum magna imperdiet vel. Quisque eget vestibulum urna. Quisque imperdiet id urna at dignissim.',
            mainImg: 'Image_6.png',
            images: [
                {
                    id: '1',
                    img: 'Image_6.png',
                },
                {
                    id: '2',
                    img: 'Image_2.png',
                },
                {
                    id: '3',
                    img: 'Image_6.png',
                },
                {
                    id: '4',
                    img: 'Image_7.png',
                },
            ],
            category: 'Kopie obrazów',
        },
        {
            id: '4',
            title: 'aniolki',
            shortDescription: 'Lorem Ipsum',
            description: 'test descriptionLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non convallis ligula. Suspendisse maximus egestas leo, et scelerisque sem pharetra eget. Mauris tempor orci a nunc consequat, ac bibendum orci mollis. Praesent consequat, turpis ac convallis placerat, lacus arcu sollicitudin ligula, in semper risus quam convallis tellus. Suspendisse potenti. Cras mattis massa a eros efficitur porta. Quisque tempor, quam vel auctor sollicitudin, quam nisl elementum tellus, nec scelerisque enim tellus non est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi sed lacus nec justo scelerisque dignissim a nec lorem. Pellentesque efficitur eros ac libero vestibulum, commodo finibus felis finibus. Donec quis dignissim mi, quis rutrum mauris. Etiam vulputate quam metus, vel elementum magna imperdiet vel. Quisque eget vestibulum urna. Quisque imperdiet id urna at dignissim.',
            mainImg: 'Image_7.png',
            images: [
                {
                    id: '1',
                    img: 'Image_7.png',
                },
                {
                    id: '2',
                    img: 'Image_2.png',
                },
                {
                    id: '3',
                    img: 'Image_6.png',
                },
                {
                    id: '4',
                    img: 'Image_1.png',
                },
            ],
            category: 'Kopie obrazów',
        },
        {
            id: '5',
            title: 'wieinec',
            shortDescription: 'Lorem Ipsum',
            description: 'test descriptionLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non convallis ligula. Suspendisse maximus egestas leo, et scelerisque sem pharetra eget. Mauris tempor orci a nunc consequat, ac bibendum orci mollis. Praesent consequat, turpis ac convallis placerat, lacus arcu sollicitudin ligula, in semper risus quam convallis tellus. Suspendisse potenti. Cras mattis massa a eros efficitur porta. Quisque tempor, quam vel auctor sollicitudin, quam nisl elementum tellus, nec scelerisque enim tellus non est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi sed lacus nec justo scelerisque dignissim a nec lorem. Pellentesque efficitur eros ac libero vestibulum, commodo finibus felis finibus. Donec quis dignissim mi, quis rutrum mauris. Etiam vulputate quam metus, vel elementum magna imperdiet vel. Quisque eget vestibulum urna. Quisque imperdiet id urna at dignissim.',
            mainImg: 'Image_8.png',
            images: [
                {
                    id: '1',
                    img: 'Image_8.png',
                },
                {
                    id: '2',
                    img: 'Image_2.png',
                },
                {
                    id: '3',
                    img: 'Image_6.png',
                },
                {
                    id: '4',
                    img: 'Image_7.png',
                },
            ],
            category: 'Dekoracje',
        },
        {
            id: '6',
            title: 'kwiatki',
            shortDescription: 'Lorem Ipsum',
            description: 'test descriptionLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non convallis ligula. Suspendisse maximus egestas leo, et scelerisque sem pharetra eget. Mauris tempor orci a nunc consequat, ac bibendum orci mollis. Praesent consequat, turpis ac convallis placerat, lacus arcu sollicitudin ligula, in semper risus quam convallis tellus. Suspendisse potenti. Cras mattis massa a eros efficitur porta. Quisque tempor, quam vel auctor sollicitudin, quam nisl elementum tellus, nec scelerisque enim tellus non est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi sed lacus nec justo scelerisque dignissim a nec lorem. Pellentesque efficitur eros ac libero vestibulum, commodo finibus felis finibus. Donec quis dignissim mi, quis rutrum mauris. Etiam vulputate quam metus, vel elementum magna imperdiet vel. Quisque eget vestibulum urna. Quisque imperdiet id urna at dignissim.',
            mainImg: 'Image_9.png',
            images: [
                {
                    id: '1',
                    img: 'Image_9.png',
                },
                {
                    id: '2',
                    img: 'Image_2.png',
                },
                {
                    id: '13',
                    img: 'Image_6.png',
                },
                {
                    id: '4',
                    img: 'Image_7.png',
                },
            ],
            category: 'Dekoracje',
        },
        {
            id: '7',
            title: 'aniolki',
            shortDescription: 'Lorem Ipsum',
            description: 'test descriptionLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non convallis ligula. Suspendisse maximus egestas leo, et scelerisque sem pharetra eget. Mauris tempor orci a nunc consequat, ac bibendum orci mollis. Praesent consequat, turpis ac convallis placerat, lacus arcu sollicitudin ligula, in semper risus quam convallis tellus. Suspendisse potenti. Cras mattis massa a eros efficitur porta. Quisque tempor, quam vel auctor sollicitudin, quam nisl elementum tellus, nec scelerisque enim tellus non est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi sed lacus nec justo scelerisque dignissim a nec lorem. Pellentesque efficitur eros ac libero vestibulum, commodo finibus felis finibus. Donec quis dignissim mi, quis rutrum mauris. Etiam vulputate quam metus, vel elementum magna imperdiet vel. Quisque eget vestibulum urna. Quisque imperdiet id urna at dignissim.',
            mainImg: 'Image_7.png',
            images: [
                {
                    id: '1',
                    img: 'Image_7.png',
                },
                {
                    id: '2',
                    img: 'Image_2.png',
                },
                {
                    id: '3',
                    img: 'Image_6.png',
                },
                {
                    id: '4',
                    img: 'Image_1.png',
                },
            ],
            category: 'Kopie obrazów',
        },
        {
            id: '8',
            title: 'wieinec',
            shortDescription: 'Lorem Ipsum',
            description: 'test descriptionLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non convallis ligula. Suspendisse maximus egestas leo, et scelerisque sem pharetra eget. Mauris tempor orci a nunc consequat, ac bibendum orci mollis. Praesent consequat, turpis ac convallis placerat, lacus arcu sollicitudin ligula, in semper risus quam convallis tellus. Suspendisse potenti. Cras mattis massa a eros efficitur porta. Quisque tempor, quam vel auctor sollicitudin, quam nisl elementum tellus, nec scelerisque enim tellus non est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi sed lacus nec justo scelerisque dignissim a nec lorem. Pellentesque efficitur eros ac libero vestibulum, commodo finibus felis finibus. Donec quis dignissim mi, quis rutrum mauris. Etiam vulputate quam metus, vel elementum magna imperdiet vel. Quisque eget vestibulum urna. Quisque imperdiet id urna at dignissim.',
            mainImg: 'Image_8.png',
            images: [
                {
                    id: '1',
                    img: 'Image_8.png',
                },
                {
                    id: '2',
                    img: 'Image_2.png',
                },
                {
                    id: '3',
                    img: 'Image_6.png',
                },
                {
                    id: '4',
                    img: 'Image_7.png',
                },
            ],
            category: 'Dekoracje',
        },
        {
            id: '9',
            title: 'kwiatki',
            shortDescription: 'Lorem Ipsum',
            description: 'test descriptionLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non convallis ligula. Suspendisse maximus egestas leo, et scelerisque sem pharetra eget. Mauris tempor orci a nunc consequat, ac bibendum orci mollis. Praesent consequat, turpis ac convallis placerat, lacus arcu sollicitudin ligula, in semper risus quam convallis tellus. Suspendisse potenti. Cras mattis massa a eros efficitur porta. Quisque tempor, quam vel auctor sollicitudin, quam nisl elementum tellus, nec scelerisque enim tellus non est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi sed lacus nec justo scelerisque dignissim a nec lorem. Pellentesque efficitur eros ac libero vestibulum, commodo finibus felis finibus. Donec quis dignissim mi, quis rutrum mauris. Etiam vulputate quam metus, vel elementum magna imperdiet vel. Quisque eget vestibulum urna. Quisque imperdiet id urna at dignissim.',
            mainImg: 'Image_9.png',
            images: [
                {
                    id: '1',
                    img: 'Image_9.png',
                },
                {
                    id: '2',
                    img: 'Image_2.png',
                },
                {
                    id: '13',
                    img: 'Image_6.png',
                },
                {
                    id: '4',
                    img: 'Image_7.png',
                },
            ],
            category: 'Dekoracje',
        },
    ]
};

export default initialState;