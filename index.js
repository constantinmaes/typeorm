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
    /* const posts = await postRepository.find({
        select: ['id', 'title', 'comments'],
        order: {
            likes: 'DESC',
            title: 'ASC',
        },
        //relations: ['comments'],
    });*/
    // console.log(posts);
    // console.log(require('util').inspect(posts, false, null, true));
    /*const postById = await postRepository.findOneBy({ id: 1 });
    console.log(postById);*/

    // 1. créer un objet js
    /* const newPost = {
        title: 'Mon 2e post',
        content: 'Contenu de mon 2e post',
        likes: 20,
        comments: [
            {
                content: '1er commentaire',
            },
            {
                content: '2e commentaire',
            },
            {
                content: '3e commentaire',
            },
        ],
    }; */
    // 2. insérer en base de données
    // await postRepository.save(newPost);
    // console.log(newPost);

    /*const myPost = await postRepository.findOne({
        where: { id: 3 },
    });
    myPost.comments.push({
        content: '5e commentaire',
    });
    // myPost.title = 'Hello';
    await postRepository.save(myPost);*/

    //await postRepository.update({ id: 3 }, { title: 'IEPSM' });
    await postRepository.delete({ id: 3 });
})();
