module.exports = {
    name: 'Post',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        title: {
            type: 'varchar',
        },
        content: {
            nullable: true,
            type: 'text',
        },
        likes: {
            type: 'int',
            default: 0,
        },
    },
    relations: {
        comments: {
            target: 'Comment',
            type: 'one-to-many',
            inverseSide: 'post',
            cascade: true,
            eager: true,
        },
    },
};
