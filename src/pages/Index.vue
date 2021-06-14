<template>
  <Layout>
    <!-- Page Header-->
    <header
      class="masthead"
      style="background-image: url('/img/home-bg.jpg')"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- Post preview-->
          <div class="post-preview" v-for="edge in $page.posts.edges" :key="edge.node.id">
            <g-link :to="`post/${edge.node.id}`">
              <h2 class="post-title">
                {{edge.node.title}}
              </h2>
            </g-link>
            <p class="post-meta">
              Posted by
              <g-link to="/">guoshi</g-link>
              {{ edge.node.created_at }}
            </p>
            <p>
              <span v-for="tag in edge.node.tags" :key="tag.id"><a href="">{{tag.title}}</a> &nbsp;&nbsp;</span>
            </p>
            <hr class="my-4" />
          </div>
          <!-- Divider-->
          <!-- Divider-->
          <hr class="my-4" />
          <!-- Pager-->
          <pager :info="$page.posts.pageInfo"></pager>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($page: Int) {
  posts: allStrapiPosts (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id,
        title,
				created_at,
        tags {
          id,
          title,
        }
      }
    }
  }
}
</page-query>

<script>
import {Pager} from 'gridsome';

export default {
  metaInfo: {
    title: "首页",
  },
  components: {
    Pager,
  }
};
</script>
