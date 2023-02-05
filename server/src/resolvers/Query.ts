const queryTwitterResolvers =  {
  currentUser: () => {
    return {
      id: "123",
      name: "John Doe",
      handle: "johndoe",
      coverUrl: "https://picsum.photos/200/300",
      avatarUrl: "https://picsum.photos/200/300",
      createdAt: "2021-05-01T00:00:00.000Z",
      updatedAt: "2021-05-01T00:00:00.000Z",
    }
  },
    suggestions: () => {
    return []
  }
}

export default queryTwitterResolvers;