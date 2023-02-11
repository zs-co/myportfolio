<template>
  <div class="container mx-auto">
    <header class="py-10">
      <h1 class="text-5xl font-bold text-center">My Portfolio</h1>
    </header>

    <main class="flex flex-wrap">
      <section v-for="item in items" :key="item.id" class="w-full md:w-1/2 p-4">
        <div class="bg-white rounded shadow-lg">
          <img :src="item.img" alt="Image" class="h-64 w-full object-cover">
          <div class="p-6">
            <h3 class="font-bold text-xl mb-3">{{ item.title }}</h3>
            <p class="text-gray-700 text-base">
              {{ item.description }}
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Project 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          img: "https://picsum.photos/400/300"
        },
        {
          id: 2,
          title: "Project 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          img: "https://picsum.photos/400/300"
        },
        {
          id: 3,
          title: "Project 3",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          img: "https://picsum.photos/400/300"
        }
      ]
    };
  }
};
</script>
