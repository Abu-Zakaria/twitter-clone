<template>
  <div class="card card-profile widget-item p-0">
    <div class="profile-banner">
      <figure class="profile-banner-small">
        <a href="profile.html">
          <img src="@/assets/images/banner/banner-small.jpg" alt="" />
        </a>
        <a href="profile.html" class="profile-thumb-2">
          <img src="@/assets/images/profile/profile-midle-1.jpg" alt="" />
        </a>
      </figure>
      <div class="profile-desc text-center">
        <h6 class="author">
          <a href="profile.html">{{ user.name }}</a>
        </h6>
        <p>
          {{ user.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UserBannerInfo from "@/models/UserBannerInfo";

@Options({
  props: {
    user: UserBannerInfo,
  },
})
export default class ProfileBannerComponent extends Vue {
  user!: UserBannerInfo;
}
</script>
