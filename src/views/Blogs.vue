<template>
  <div class="blog-card-wrap">
      <div class="blog-cards container">
        
        <div class="toggle-edit">
          <span>Toggle Editing Post</span>
          <input type="checkbox" v-model="editPost">
        </div>

        <BlogCard v-for="(post,index) in sampleBlogCards" :key="index" :post="post"/>  

      </div>
  </div>
</template>

<script>
import BlogCard from '../components/BlogCard.vue'
import {FUNCTIONS} from "@/store/variables";
import {mapGetters} from 'vuex';

export default {
    name: "blogs",
    components: {
        BlogCard,
    },
    computed:{
        ...mapGetters(
            {
                sampleBlogCards:FUNCTIONS.GET_SAMPLE_BLOG_CARDS,
            }
        ),
        editPost:{
            get(){
                return this.$store.state.editPost;
            },
            set(payload){
                this.$store.commit("toggleEditPost",payload);
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.blog-cards{
  position:relative;

  .toggle-edit{
    display:flex;
    align-items:center;
    position:absolute;
    top:-70px;
    right:0;

    input[type="checkbox"]{
      cursor:pointer;
      position:relative;
      border:none;
      appearance: none;
      background:#fff;
      outline:none;
      width:80px;
      height:30px;
      border-radius:20px;
      box-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);
    }

    input[type="checkbox"]::after{
      position:absolute;
      content:"";
      width:30px;
      height:30px;
      border-radius:20px;
      top:0;
      left:0;
      background:#303030;
      transform:scale(1.1);
      transition:750ms ease all;
      box-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.6);
    }

    input:checked[type="checkbox"]::after{
      background:#fff;
      left:52px;
    }

    span {
      margin-right: 15px;
    }
  }
}

</style>