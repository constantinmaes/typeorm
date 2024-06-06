module.exports = {
    name: 'Comment',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        content: {
            type: 'text',
        },
    },
    relations: {
        post: {
            target: 'Post',
            type: 'many-to-one',
            inverseSide: 'comments',
            onDelete: 'CASCADE',
        },
    },
};
