const baseUrl = 'https://playground.4geeks.com';
const userName = 'fatimaov';


export async function getContacts() {

    const urltoFetch = `${baseUrl}/contact/agendas/${userName}/contacts`;

    try {
        const response = await fetch(urltoFetch);
        const responseJson = await response.json();
        const data = responseJson.contacts;
        return data;
    } catch (error) {
        console.error('Get contacts', error)
    }
}

export async function deleteContact(id) {

    const urltoFetch = `${baseUrl}/contact/agendas/${userName}/contacts/${id}`;

    try {
        const response = await fetch(urltoFetch, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (!response.ok) throw new Error(response.status)

    } catch (error) {
        console.error('Failed to delete contact', error)
    }
}

export async function addContact(name, phone, email, address) {

    const urltoFetch = `${baseUrl}/contact/agendas/${userName}/contacts`;

    try {
        const response = await fetch(urltoFetch, {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                phone: phone,
                email: email,
                address: address,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

    } catch (error) {
        console.error('Post contact', error)
    }
}









