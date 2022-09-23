<template>
  <div class="table">
    <!-- Header -->
    <div class="table-headers">

      <div class="header-item">Название трассы:</div>

      <div class="header-item">Год основания:
        <div class="header-icons">
          <span @click="sortByDateDESC" class="material-icons">expand_less</span>
          <span @click="sortByDateASC" class="material-icons">expand_more</span>
        </div>
      </div>

      <div class="header-item">Длинна трассы км:
        <div class="header-icons">
          <span @click="sortByDistanceDESC" class="material-icons">expand_less</span>
          <span @click="sortByDistanceASC" class="material-icons">expand_more</span>
        </div>
      </div>

      <div class="header-item">Рекорд трассы:
        <div class="header-icons">
          <span @click="sortByRecordDESC" class="material-icons">expand_less</span>  
          <span @click="sortByRecordASC" class="material-icons">expand_more</span>
        </div>
      </div>
    </div>
    <div class="table-items">
      <!-- Table with data -->
      <TableItem
      v-for="item in pagePagination"
      :key="item.id"
      :item_data="item"/>
    </div>
    <div class="pages">
      <div class="pages-container">
        Страницы:
        <div class="page"
        v-for="page in pages"
        :key="page"
        @click="changePage(page)"
        :class="{'currentPage': page === pageNumber}">
          {{page}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableItem from './TableItem.vue';
  export default {
    name: 'Table',
    components: { TableItem },
    props: {
      tracks_data: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    data() {
      return {
        tracksPerPage: 4,
        pageNumber: 1
      }
    },
    computed: {
      pages() {
        return Math.ceil(this.tracks_data.length / 4)
      },
      pagePagination() {
        const firstPage = (this.pageNumber -1) * this.tracksPerPage;
        const lastPage = firstPage + this.tracksPerPage
        return this.tracks_data.slice(firstPage, lastPage)
      }
    },
    methods: {
      changePage(page) {
        this.pageNumber = page
      },
      sortByDateASC() {
        this.tracks_data.sort((a,b) => a.date - b.date)
      },
      sortByDateDESC() {
        this.tracks_data.sort((a,b) => b.date - a.date)
      },
      sortByDistanceASC() {
        this.tracks_data.sort((a,b) => a.distance - b.distance)
      },
      sortByDistanceDESC() {
        this.tracks_data.sort((a,b) => b.distance - a.distance)
      },
      sortByRecordASC() {
        this.tracks_data.sort((a,b) => a.record - b.record)
      },
      sortByRecordDESC() {
        this.tracks_data.sort((a,b) => b.record - a.record)
      }
    }
  }
</script>

<style>
  .table {
    max-width: 1000px;
    margin: 0 auto;
  }
  .table-headers {
    display: flex;
    justify-content: space-around;
    border: solid 1px;
    border-radius: 10px;
    background-color: #41B883;
    color: white;
    padding: 12px;
  }
  .header-item {
    display: flex;
    align-items: center;
  }
  .pages {
    background-color: #41B883;
    border-radius: 5px;
  }
  .pages-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: white;
    margin-right: 60px;
  }
  .page {
    margin: 5px;
    cursor: pointer;
    width: 22px;
    height: 22px;
  }
  .currentPage {
    margin: 5px;
    cursor: pointer;
    background-color: white;
    color: #41B883;
    border-radius: 50%;
    width: 22px;
    height: 22px;
  }
  .table-icons {
    display: flex;
  }
  .material-icons {
    cursor: pointer;
    margin-left: 5px;
  }
  .header-icons {
    display: flex;
    flex-direction: column;
    margin-top: 4px;
  }
</style>
