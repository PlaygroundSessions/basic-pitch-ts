/*
 * Copyright 2022 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module.exports = {
  // extends: ['@spotify', '@spotify/eslint-config-oss'],
  // plugins: ['simple-import-sort', 'unused-imports'],
  extends: ['@spotify/eslint-config-oss', "plugin:@typescript-eslint/recommended"],
  plugins: ['simple-import-sort', 'unused-imports', "@typescript-eslint"],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
  },
  parser: '@typescript-eslint/parser',
};
