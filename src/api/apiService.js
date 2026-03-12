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

async function addSeedData(seedData) {
    const urltoFetch = `${baseUrl}/contact/agendas/${userName}/contacts`;

    for (let i = 0; i < seedData.length; i++) {
        try {
            const response = await fetch(urltoFetch, {
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
    const urltoFetch = `${baseUrl}/contact/agendas/${userName}`;
    try {
        await fetch(urltoFetch, {
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
    const urltoFetch = `${baseUrl}/contact/agendas/${userName}`;
    try {
        const response = await fetch(urltoFetch)
        return response.ok

    } catch (error) {
        console.error('Get user', error)
    }
}

export async function appInit() {
    const checkUser = await getUser()
    if(!checkUser) {
        await addUser();
    }
    let checkData = await getContacts();
    if(checkData.length === 0) {
        await addSeedData(seedData);
    }
    checkData = await getContacts();
    return checkData;
}










