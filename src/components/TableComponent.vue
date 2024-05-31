<template>
  <div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <div class="main-container">
      <div class="button-container">
        <button @click="addInput" class="add-button">Нэмэх</button>
        <button @click="logout" class="logout-button">Гарах</button>
      </div>
      <div class="table-container">
        <table class="custom-table">
          <thead>
            <tr>
              <th>№</th>
              <th>Огноо</th>
              <th>Эзэмшигч</th>
              <th>Хэлтэс/Нэгж</th>
              <th>Гомдол</th>
              <th>Баркод</th>
              <th>Tөрөл</th>
              <th>Модел</th>
              <th>Service Tag</th>
              <th>Storage</th>
              <th>RAM</th>
              <th>CPU</th>
              <th>MAC</th>
              <th>OS</th>
              <th>PC Name</th>
              <th>Power Supply</th>
              <th>User</th>
              <th>Operation</th>
              <th>Тайлбар</th>
              <th>Шаардах/Акт</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(input) in filteredInputs" :key="input.id">
              <td>{{ input.id }}</td>
              <td>{{ formatDate(input.date) }}</td>
              <td>{{ input.owner }}</td>
              <td>{{ input.department }}</td>
              <td>{{ input.complain }}</td>
              <td>{{ input.barcode }}</td>
              <td>{{ input.type }}</td>
              <td>{{ input.model }}</td>
              <td>{{ input.serviceTag }}</td>
              <td>{{ input.storage }}</td>
              <td>{{ input.ram }}</td>
              <td>{{ input.cpu }}</td>
              <td>{{ input.mac }}</td>
              <td>{{ input.os }}</td>
              <td>{{ input.pcName }}</td>
              <td>{{ input.powerSupply }}</td>
              <td>{{ input.user }}</td>
              <td>{{ input.operation }}</td>
              <td>{{ input.description }}</td>
              <td>{{ input.demand }}</td>
              <td class="action-buttons">
                <button @click="openModal(input)">
                  <i class="material-icons">edit</i>
                </button>
                <button @click="deleteInput(input)">
                  <i class="material-icons">delete</i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal fade" :class="{ 'show': modalShow }" role="dialog">
        <edit-modal v-if="modalShow" :isOpen="modalShow" :rowData="selectedRow" :isEditMode="isEditMode" @close="closeModal" />
      </div>
    </div>
  </div>
</template>
  
<script>
  import EditModal from './EditModal.vue';
  import axios from 'axios';

  export default {
    components: {
      EditModal,
    },
    data() {
      return {
        inputs: [],
        apiLoading  : false,
        modalShow: false,
        isEditMode: false,
        modalTitle: '',
        selectedRow: {},
        newInput: {
          date: '',
          owner: '',
          department: '',
          complain: '',
          barcode: '',
          type: '',
          model: '',
          serviceTag: '',
          storage: '',
          ram: '',
          cpu: '',
          mac: '',
          os: '',
          pcName: '',
          powerSupply: '',
          user: '',
          operation: '',
          description: '',
          demand: ''
        }
      };
    },
    created(){
      this.fetchTable();
    },
    computed: {
      filteredInputs() {
        return this.inputs.filter(input => !input.deletedAt);
      },
    },
    methods: {
  async fetchTable() {
    try {
      const response = await axios.get(
        `${
          process.env.NODE_ENV === "production"
            ? "http://10.21.60.152:9000"
            : "http://127.0.0.1:9000"
        }/user/getTable`
      );
      this.inputs = response.data.sort((a, b) => a.id - b.id);
    } catch (error) {
      console.error("Error fetching table data:", error);
    }
  },
  openModal(input) {
    console.log("Opening modal for input:", input);
    this.selectedRow = input ? { ...input } : { ...this.newInput };
    this.isEditMode = !!input;
    this.modalShow = true;
    console.log("modalShow:", this.modalShow);
  },
      async updateTable(input) {
        try {
          const username = localStorage.getItem('user');
          console.log('Username:', username);
          const currentDate = new Date().toISOString();
          input.updatedAt = currentDate;
          input.updatedBy = JSON.parse(username).userName;
          const requestBody = {
            ...input,
            username: JSON.parse(username).userName
          };
          await axios.put(
          `${
            process.env.NODE_ENV === "production"
              ? "http://10.21.60.152:9000"
              : "http://127.0.0.1:9000"
          }/user/updateTable/${input.id}`,
          requestBody
        );
        console.log("Successfully updated input:", input);
      } catch (error) {
        console.error("Error updating input:", error);
      }
    },
      async addInput() {
        this.openModal(null); 
        await this.fetchTable();
      },
      closeModal() {
        this.modalShow = false;
      },
      async deleteInput(input) {
        try {
          const username = localStorage.getItem('user');
          const confirmation = confirm('Та энэ мэдээллийг устгахдаа итгэлтэй байна уу?');
          if (confirmation) {
            await axios.delete(
          `${
            process.env.NODE_ENV === "production"
              ? "http://10.21.60.152:9000"
              : "http://127.0.0.1:9000"
          }/user/deleteTable/${input.id}`,
          { data: { username: JSON.parse(username).userName } }
        );
        this.inputs = this.inputs.filter((item) => item.id !== input.id);
        window.alert("Мэдээлэл амжилттай устгагдлаа.");
          }
      } catch (error) {
        console.error("Устгахад алдаа гарлаа.", error);
      }
    },
    logout() {
      const confirmation = confirm('Та системээс гарахдаа итгэлтэй байна уу?');
      if (confirmation) {
        localStorage.removeItem("user");
        this.$router.push("/login");
        location.reload();
      }
    },
      formatDate(date) {
      const dateObj = new Date(date);
      return dateObj.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
      }
    }
  };
</script>

<style scoped>
  .button-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.table-container{
  max-height: 700px;
  overflow: auto;
}
.add-button,
.logout-button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  width: 80px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.add-button:hover,
  .logout-button:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
  }
.custom-table {
  border-collapse: collapse;
  width: 100%;
  font-size: 14px;
  overflow-x: auto;
  border: 1px solid #ddd;
}
.custom-table th,
.custom-table td {
  border: none;
  padding: 15px 4px 15px 4px;
  text-align: center;
}

.custom-table th {
  background-color: #e5e5e5;
  position: sticky;
  top: 0;
  z-index: 1;
}
.custom-table tr:nth-child(odd) {
    background-color: #f9f9f9;
  }
.action-buttons{
  display: flex;
  flex-direction: row;
}
.action-buttons button {
  background-color: transparent;
  color: #c7c4c4;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-right: 5px;
}
.input-section {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  gap: 10px;
  padding: 10px;
  justify-content:space-evenly;
}

.input-section input,
.input-section select,
.input-section button {

  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  text-align: center;
  width: 250px;
}
.input-section button{
  border: none;
  background-color: #4CAF50;
  color: white;
  width: 265px;
}
</style>