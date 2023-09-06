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
      width: 200px;
    }
    .input {
      height: 50px;
      border: 1px solid;
      text-align: center;
      font-weight: bold;
    }
    .sets {
      width: 50px;
    }
    .reps,
    .weight {
      width: 75px;
    }
  </style>

  
  