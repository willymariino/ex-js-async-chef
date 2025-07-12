/*
In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
Recuperare la ricetta da https://dummyjson.com/recipes/{id}
Estrarre la proprietà userId dalla ricetta
Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
Restituire la data di nascita dello chef

Note del docente:
Scrivi la funzione getChefBirthday(id), che deve:
Essere asincrona (async).
Utilizzare await per chiamare le API.
Restituire una Promise con la data di nascita dello chef.
Gestire gli errori con try/catch
*/

async function getChefBirthday(id, userId) {
    const post = await axios.get(`https://dummyjson.com/recipes/${id}`)
    const user = await axios.get(`https://dummyjson.com/users/${userId}`)
    // return {...post, user}
    return { ...post.data, user: user.data }
}

(async () => {
    try {
        const user = await getChefBirthday(1, 2)
        console.log("post completo", user)
    }
    catch (error) {
        console.error(error)

    }
    finally {
        console.log("operazione terminata")
    }


})()

