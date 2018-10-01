const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/15.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'femail',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/25.jpg'
    },
    {
        name: 'Will Johnson',
        age: 39,
        gender: 'male',
        lookingfor: 'female',
        location: 'Lynn MA',
        image: 'https://randomuser.me/api/portraits/men/33.jpg'
    },
];

const profiles = profileIterator(data);

nextProfile();

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
    currentProfile = profiles.next().value
    
    if (currentProfile != undefined) {
        document.getElementById('profile-display').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
                <li class="list-group-item">Preference: ${currentProfile.gender}</li>
                <li class="list-group-item">Looking for: ${currentProfile.lookingfor}</li>
            </ul>
        `;

        document.getElementById('image-display').innerHTML = `
            <img src="${currentProfile.image}">
        `;
    } else {
        alert('No more profiles');
        window.location.reload();
    }
}

function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            if (nextIndex < profiles.length) {
                return { 
                    value: profiles[nextIndex++],
                    done: false,
                };
            } else {
                return {
                    done: true
                }
            }
        }
    };
}


