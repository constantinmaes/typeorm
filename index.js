const typeorm = require('typeorm');

let connection = null;

const createConnection = async () => {
    try {
        connection = await typeorm.createConnection({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'test_typeorm',
            logging: true,
            entities: [
                new typeorm.EntitySchema(require('./entities/post')),
                new typeorm.EntitySchema(require('./entities/comment')),
            ],
            synchronize: true,
        });
    } catch (error) {
        console.log('Error: ', error);
    }
};

(async () => {
    await createConnection();
    const postRepository = connection.getRepository('Post');
    const posts = await postRepository.find({
        select: ['id', 'title', 'comments'],
        order: {
            likes: 'DESC',
            title: 'ASC',
        },
        //relations: ['comments'],
    });
    console.log(posts);
    console.log(require('util').inspect(posts, false, null, true));
    /*const postById = await postRepository.findOneBy({ id: 1 });
    console.log(postById);*/
})();
