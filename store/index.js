export const state = () => ({
    posts:[]
  })

  export const mutations = {
    
      GET_POSTS(state, posts) {
        state.posts = posts
      }
  }

  export const actions = {
        async nuxtServerInit ({ commit }) {
          let posts = await this.$storyapi.get('cdn/stories', {
            version: "draft",
            starts_with: 'blog/'
          })
          .then(res => res.data.stories.map(bp => {
              return {
                blok: bp.content,
                id: bp.slug,
                title: bp.content.title,
                summary: bp.content.summary,
                image: bp.content.imageLink,
                content: bp.content.content   
              }
            })
          )
          commit('GET_POSTS', posts)
        }
  }