export let addPost = (newWrittenPost) => {
  let newPost = {
    id: 3,
    message: newWrittenPost,
    likes: 0
  };

  state.profile.posts.push(newPost);
}

let state = {
  dialogs: {
    userData: [{
        name: 'Ira',
        id: '1',
        avatar: 'https://cdn.vox-cdn.com/thumbor/iwWqMpXu0ZNmsZZqUNnbT-HW21c=/0x0:472x555/1200x0/filters:focal(0x0:472x555):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23584941/Screenshot_2022_05_24_at_11.49.21.png'
      },
      {
        name: 'Marina',
        id: '2',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDmbjopKYW79dTzqnwRz7bOserjydWBRAi_Q&usqp=CAU'
      },
      {
        name: 'Sveta',
        id: '3',
        avatar: 'https://images.news18.com/ibnlive/uploads/2020/11/1605257234_google_photos_logo.jpg?impolicy=website&width=510&height=356'
      }
    ],
    messageData: [{
      message: 'Hi!',
      id: '1'
    }, {
      message: 'Hi! How are you?',
      id: '2'
    }, {
      message: 'Fine, thanks.',
      id: '3'
    }]
  },
  profile: {
    posts: [{
      id: 1,
      message: 'My first post',
      likes: '10'
    }, {
      id: 2,
      message: 'My second post',
      likes: '5'
    }]
  },
  friends: {
    friend: [{
      id: 1,
      avatar: 'https://cdn.vox-cdn.com/thumbor/iwWqMpXu0ZNmsZZqUNnbT-HW21c=/0x0:472x555/1200x0/filters:focal(0x0:472x555):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23584941/Screenshot_2022_05_24_at_11.49.21.png',
      name: 'Ira'
    }, {
      id: 2,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDmbjopKYW79dTzqnwRz7bOserjydWBRAi_Q&usqp=CAU',
      name: 'Marina'
    }, {
      id: 3,
      avatar: 'https://images.news18.com/ibnlive/uploads/2020/11/1605257234_google_photos_logo.jpg?impolicy=website&width=510&height=356',
      name: 'Sveta'
    }]
  }
}

export default state;