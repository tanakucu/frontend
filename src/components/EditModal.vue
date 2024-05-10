<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        v-if="isOpen"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <div class="modal-content">
          <div class="input-grid">
            <input v-model="formData.date" type="date" />
            <input
              v-model="formData.owner"
              type="text"
              placeholder="Эзэмшигч"
            />
            <input
              v-model="formData.department"
              type="text"
              placeholder="Хэлтэс / Нэгж"
            />
            <input
              v-model="formData.complain"
              type="text"
              placeholder="Complaints"
            />
            <input
              v-model="formData.barcode"
              type="text"
              placeholder="Barcode"
            />
            <div class="radio-button">
              <label>
                <input
                  type="radio"
                  v-model="formData.type"
                  value="PC"
                />PC</label
              >
              <label>
                <input
                  type="radio"
                  v-model="formData.type"
                  value="Laptop"
                />Laptop</label
              >
            </div>
            <input v-model="formData.model" type="text" placeholder="Model" />
            <input
              v-model="formData.serviceTag"
              type="text"
              placeholder="Service Tag"
            />
            <input
              v-model="formData.storage"
              type="text"
              placeholder="Storage"
            />
            <div class="radio-button">
              <label>
                <input type="radio" v-model="formData.ram" value="4GB" />4GB
                RAM</label
              >
              <label>
                <input type="radio" v-model="formData.ram" value="8GB" />8GB
                RAM</label
              >
              <label>
                <input type="radio" v-model="formData.ram" value="16GB" />16GB
                RAM</label
              >
            </div>
            <div class="radio-button">
              <label>
                <input
                  type="radio"
                  v-model="formData.cpu"
                  value="Intel"
                />Intel</label
              >
              <label>
                <input
                  type="radio"
                  v-model="formData.cpu"
                  value="AMD"
                />AMD</label
              >
            </div>
            <input v-model="formData.mac" type="text" placeholder="MAC" />
            <input v-model="formData.os" type="text" placeholder="OS" />
            <input
              v-model="formData.pcName"
              type="text"
              placeholder="PC Name"
            />
            <input
              v-model="formData.powerSupply"
              type="text"
              placeholder="Power Supply"
            />
            <input v-model="formData.user" type="text" placeholder="User" />
            <input
              v-model="formData.operation"
              type="text"
              placeholder="Operation / Онош"
            />
            <input
              v-model="formData.description"
              type="text"
              placeholder="Тайлбар"
            />
            <div class="radio-button">
              <label>
                <input
                  type="radio"
                  v-model="formData.demand"
                  value="Актлах"
                />Актлах</label
              >
              <label>
                <input
                  type="radio"
                  v-model="formData.demand"
                  value="Сэлбэг"
                />Сэлбэг</label
              >
              <label>
                <input
                  type="radio"
                  v-model="formData.demand"
                  value="Устгах"
                />Устгах</label
              >
            </div>
          </div>
          <button class="button" @click="saveChanges">
            {{ isEditMode ? "Save" : "Add" }}
          </button>
          <button class="button-close" @click="close">x</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
import { format } from "date-fns";

export default {
  props: {
    isOpen: Boolean,
    rowData: {
      type: Object,
      default: () => ({}),
    },
    isEditMode: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      formData: { ...this.rowData },
    };
  },
  watch: {
    rowData: {
      handler(newVal) {
        this.formData = { ...newVal };
      },
      immediate: true,
    },
  },
  created() {
    if (this.isEditMode) {
      const date = new Date(this.rowData.date);
      this.formData.date = format(date, "yyyy-MM-dd");
    } else {
      this.formData.date = new Date().toISOString().split("T")[0];
    }
  },
  methods: {
    async saveChanges() {
      try {
        const username = localStorage.getItem("user");
        if (!username) {
          return;
        }

        this.formData.username = JSON.parse(username).userName;

        if (this.isEditMode) {
          const response = await axios.put(
            `${
              process.env.NODE_ENV === "production"
                ? "http://10.21.60.152:9000"
                : "http://127.0.0.1:9000"
            }/user/updateTable/${this.rowData.id}`,
            this.formData
          );
          if (response.data.message === "success") {
            window.alert("Successfully updated row");
            this.$emit("close");
          } else {
            window.alert("Failed to update row");
          }
        } else {
          const response = await axios.post(
            `${
              process.env.NODE_ENV === "production"
                ? "http://10.21.60.152:9000"
                : "http://127.0.0.1:9000"
            }/user/insertTable`,
            this.formData
          );
          if (response.data.message === "success") {
            window.alert("Successfully added new row");
            this.formData = {};
            this.$emit("close");
          } else {
            window.alert("Failed to add new row");
          }
        }
      } catch (error) {
        window.alert("Error saving changes:", error.message);
      }
    },
    close() {
      this.$emit("close");
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return format(date, "yyyy-MM-dd");
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  min-width: 750px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  max-width: 750px;
  width: 90%;
  margin: 0 auto;
  z-index: 3;
  border-radius: 10px;
  padding: 20px;
}

.modal-content {
  position: relative;
  padding: 20px;
}

.button-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 0;
  cursor: pointer;
  font-weight: bold;
  color: #4caf50;
  background: transparent;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.input-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}

.input-row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.input-grid input {
  flex: 1;
  margin-right: 10px;
  padding: 8px;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
}
input[type="date"]:valid {
  color: grey;
}
.radio-button {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.radio-button label {
  margin-bottom: 2px;
  font-size: 12px;
}
.button {
  grid-column: span 4;
  justify-self: center;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: #4caf50;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  width: 80px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
}
.button:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
