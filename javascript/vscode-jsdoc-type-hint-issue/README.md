# Step to Reproduce

1. Create JSDoc type definition file, for example `types.js`.
2. Import the type into `form.js`.
3. Ensure the type hint for the specified JSDoc is working properly (no `any`) and the type is detected available inside autocomplete/intellisense.

# Actual Behaviour

JSDoc type is not available inside intellisense (autocomplete) and the type hint only show `any` type.

# Expected Behaviour

JSDoc type should be detected inside Intellisense (autocomplete) and the type hint should show the JSDoc type content instead of `any`.

# Specification

OS: Ubuntu 18.04 x86_64 (64-bit)
Code: Code 1.43.2 (Stable) and 1.44.0-insider
