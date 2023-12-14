const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [

			]
		},
		actions: {

			getAgenda: async () => {
				const store = getStore();
				const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/marthak");
				const jsonResponse = await response.json();


				setStore({ contacts: jsonResponse });
			},

			deleteContact: async (id) => {
				const actions = getActions();
				await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "DELETE"
				})

				await actions.getAgenda();
			},

			editContact: async (id, contacts) => {
				const actions = getActions();
				const editContact = {
					"full_name": contacts.full_name,
					"email": contacts.email,
					"agenda_slug": "marthak",
					"address": contacts.address,
					"phone": contacts.phone
				};

				await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(editContact),
				});

				await actions.getAgenda();


			},

			addContact: async (contacts) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					"full_name": contacts.full_name,
					"address": contacts.address,
					"phone": contacts.phone,
					"email": contacts.email,
					"agenda_slug": "marthak"
				});

				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};

				fetch("https://playground.4geeks.com/apis/fake/contact", requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.catch(error => console.log('error', error));
				getActions().getAgenda();
			}
		}
	};

}
export default getState;