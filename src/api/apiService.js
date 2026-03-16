const baseUrl = 'https://playground.4geeks.com';
const userName = 'fatimaov';
const seedData = [
    {
        "name": "John Smith",
        "phone": "+1 202-555-0143",
        "email": "john.smith@email.com",
        "address": "123 Maple Street, Springfield, IL 62704, USA"
    },
    {
        "name": "Emily Johnson",
        "phone": "+1 415-555-0198",
        "email": "emily.johnson@email.com",
        "address": "456 Oak Avenue, San Francisco, CA 94107, USA"
    },
    {
        "name": "Michael Brown",
        "phone": "+1 312-555-0176",
        "email": "michael.brown@email.com",
        "address": "789 Pine Road, Chicago, IL 60605, USA"
    },
    {
        "name": "Sarah Davis",
        "phone": "+1 646-555-0125",
        "email": "sarah.davis@email.com",
        "address": "321 Cedar Lane, New York, NY 10001, USA"
    }
]


export async function getContacts() {
    const urlToFetch = `${baseUrl}/contact/agendas/${userName}/contacts`;

    try {
        const response = await fetch(urlToFetch);
        const responseJson = await response.json();
        const data = responseJson.contacts;
        return data;
    } catch (error) {
        console.error('Get contacts', error)
    }
}

export async function deleteContact(id) {
    const urlToFetch = `${baseUrl}/contact/agendas/${userName}/contacts/${id}`;

    try {
        const response = await fetch(urlToFetch, {
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

export async function addContact(newContact) {
    const { name, phone, email, address } = newContact;
    const urlToFetch = `${baseUrl}/contact/agendas/${userName}/contacts`;

    try {
        const response = await fetch(urlToFetch, {
            method: 'POST',
            body: JSON.stringify({
                name: name.trim(),
                phone: phone.trim(),
                email: email.trim(),
                address: address.trim(),
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

    } catch (error) {
        console.error('Post contact', error)
    }
}

export async function editContact(contact) {
    const { name, phone, email, address, id } = contact;
    const urlToFetch = `${baseUrl}/contact/agendas/${userName}/contacts/${id}`;

    try {
        await fetch(urlToFetch, {
            method: 'PUT',
            body: JSON.stringify({
                name: name.trim(),
                phone: phone.trim(),
                email: email.trim(),
                address: address.trim(),
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

    } catch (error) {
        console.error('Put contact', error)
    }
}

async function addSeedData(seedData) {
    const urlToFetch = `${baseUrl}/contact/agendas/${userName}/contacts`;

    for (let i = 0; i < seedData.length; i++) {
        try {
            const response = await fetch(urlToFetch, {
                method: 'POST',
                body: JSON.stringify(seedData[i]),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!response.ok) throw new Error(response.status)

        } catch (error) {
            console.error('Network error addseed data', error)
        }
    }

}

export async function addUser() {
    const urlToFetch = `${baseUrl}/contact/agendas/${userName}`;
    try {
        await fetch(urlToFetch, {
            method: 'POST',
            body: '',
            headers: {
                "Content-Type": "application/json"
            }
        })

    } catch (error) {
        console.error('Get user', error)
    }
}

export async function getUser() {
    const urlToFetch = `${baseUrl}/contact/agendas/${userName}`;
    try {
        const response = await fetch(urlToFetch)
        return response.ok

    } catch (error) {
        console.error('Get user', error)
    }
}

export async function appInit() {
    const checkUser = await getUser()
    if (!checkUser) {
        await addUser();
    }
    let checkData = await getContacts();
    if (checkData.length === 0) {
        await addSeedData(seedData);
    }
    checkData = await getContacts();
    return checkData;
}










