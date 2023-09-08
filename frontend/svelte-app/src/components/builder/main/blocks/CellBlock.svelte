<script lang="ts">
    import themeStore from "../../../../stores/themeStore";
  </script>
  
  <div class={`flex flex-row justify-between input-fields ${
      $themeStore === "dark" ? "bg-dark-primary3 text-dark-text" : "bg-light-card text-light-text"
    }`}
  >
    <input class="input sets" type="text" placeholder="" />
    <input class="input reps" type="text" placeholder="" />
    <input class="input weight" type="text" placeholder="" />
  </div>
  
  <style>
    .input-fields {
      width: 165px;
    }
    .input {
      height: 30px;
      border: 1px solid;
      text-align: center;
      color: black;
    }
    .sets {
      width: 35px;
    }
    .reps,
    .weight {
      width: 65px;
    }
  </style>

  
  