// importo idati
const posts = require('../data/posts');


function index(req, res) {
    //res.send('Lista dei blog');
    //Inizialmente, il blog filtrato corrisponde a quello originale
    let filteredPost = posts;

    // Se la richiesta contiene un filtro, allora filtriamo il blog
    if (req.query.ingredient) {
        filteredPost = post.filter(
            post => post.list.includes(req.query.list)
        );
    }

    // restituiamo la variabile filteredPost
    // potrebbe essere stata filtrata o contenere il blog originale
    res.json(filteredPost);

}


function show(req, res) {
    //res.send('Dettagli del blog ' + req.params.id);
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il post tramite id
    const post = posts.find(post => post.id === id);

    // Restituiamolo sotto forma di JSON   
    res.json(post);
}

function destroy(req, res) {
    // res.send('Eliminazione del blog ' + req.params.id);

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)
    // cerchiamo il post tramite id
    const post = posts.find(post => post.id === id);
    // cancello la pizza trovata
    posts.splice(posts.indexOf(post), 1);

    // log di riscontro di check su aggiornamento dati
    console.log(posts);

    // ritorno la risposta positiva di avvenuta cancellazione
    res.sendStatus(204);
}


function update(req, res) {
    // copiamo la logica dell'update
}


function store(req, res) {
    // copiamo la logica della store
    //console.log(req.body);
    //res.send('Creazione nuovo blog');
    const newId = posts[posts.length - 1].id + 1;
    // Creo un nuovo oggetto 
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags
    }
    // Aggiungo il nuovo post
    posts.push(newPost);

    // stampo in console
    console.log(posts);

    // restituisco lo status corretto 
    res.status(201);
    res.json(newPost);


}

function update(req, res) {
    // copio la logica dell'update
    //console.log(req.body);
    //res.send('modifica vecchio blog');
    // recupero l'id dall' URL e lo trasformo in numero
    const id = parseInt(req.params.id)

    // cerco il post tramite id
    const post = posts.find(post => post.id === id);

    if (!post) {
        //restituisco stato di errore 404
        res.status(404);

        //restituisco messaggio di errore in json
        return res.json({
            error: "Not found",
            message: "post non trovato"
        })
    }

    //ora modifico i dati del post se trovato
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    //stampo il risultato in console
    console.log(posts);

    //ritorno il post modificato in formato json
    res.json(posts);

}

// esportiamo tutto
module.exports = { index, show, store, update, destroy }