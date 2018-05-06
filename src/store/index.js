export const state = () => ({
    post : {},
    posts:[]
  })

  export const mutations = {
    
      GET_POSTS(state, posts) {
        state.posts = posts
      },

       GET_SINGLE_POST(state, post) {
         state.post = post
      }
  }

  export const actions = {
        async asyncGetPosts ({ commit }) {
          let posts = await this.$storyapi.get('cdn/stories', {
            version: "draft",
            starts_with: 'blog/'
          })
          .then(res => res.data.stories.map(bp => {
              return {
                id: bp.slug,
                title: bp.content.title,
                summary: bp.content.summary,
                image: bp.content.imageLink,
                content: bp.content.content   
              }
            })
          )
          commit('GET_POSTS', posts)
        },
       async asyncGetSinglePost (id, {commit, state}) {
          const post = await state.posts.filter((post) => post['id'] === id)[0]
          commit('GET_SINGLE_POST', post)
        }
  }