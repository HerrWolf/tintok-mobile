import * as Yup from "yup";

Yup.addMethod(Yup.string, "noSpacing", function (errorMessage) {
  return this.test("test-no-spacing", errorMessage, function (value) {
    const { path, createError } = this;

    const hasSpacing = !value ? true : value.includes(" ");
    return hasSpacing ? createError({ path, message: errorMessage }) : value;
  });
});
