import { mock } from './_mock';

const users = [...Array(12)].map((_, index) => ({
    id: mock.id(index),
    name: mock.fullName(index),
    avatarUrl: mock.image.avatar(index),
}));

export const _reviews = [
    {
        id: mock.id(0),
        name: users[0].name,
        avatarUrl: users[0].avatarUrl,
        message: mock.sentence(1),
        createdAt: mock.time(1),
        users: [users[0], users[1], users[2]],
        rating: 3.5,
        helpful: 32,
        replyComment: [
            {
                id: mock.id(1),
                userId: users[1].id,
                message: mock.sentence(2),
                createdAt: mock.time(2),
            },
            {
                id: mock.id(2),
                userId: users[0].id,
                message: mock.sentence(3),
                tagUser: users[1].name,
                createdAt: mock.time(3),
            },
            {
                id: mock.id(3),
                userId: users[2].id,
                message: mock.sentence(4),
                createdAt: mock.time(4),
            },
        ],
    },
    {
        id: mock.id(4),
        name: users[4].name,
        avatarUrl: users[4].avatarUrl,
        message: mock.sentence(5),
        createdAt: mock.time(5),
        users: [users[5], users[6], users[7]],
        rating: 4.5,
        helpful: 0,
        replyComment: [
            {
                id: mock.id(5),
                userId: users[6].id,
                message: mock.sentence(7),
                createdAt: mock.time(7),
            },
            {
                id: mock.id(6),
                userId: users[7].id,
                message: mock.sentence(8),
                createdAt: mock.time(8),
            },
        ],
    },
    {
        id: mock.id(7),
        name: users[8].name,
        avatarUrl: users[8].avatarUrl,
        message: mock.sentence(9),
        createdAt: mock.time(9),
        rating: 4.5,
        helpful: 10,
        users: [],
        replyComment: [],
    },
    {
        id: mock.id(8),
        name: users[9].name,
        avatarUrl: users[9].avatarUrl,
        message: mock.sentence(10),
        createdAt: mock.time(10),
        rating: 5,
        helpful: 0,
        users: [],
        replyComment: [],
    },
];
