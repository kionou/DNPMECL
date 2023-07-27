import { reactive } from "vue";

export default function useForm() {
  const values = reactive({
     'Region': '',
     'Commune': '',
     'age': '',
     'description': '',
  });

  return {
      values,
  }
}