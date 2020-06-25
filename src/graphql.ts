import gql from 'graphql-tag';

export const LIST_RECIPES = gql`
  query ListRecipes {
    listRecipes {
      items {
        id
        title
        image
        description
      }
    }
  }
`;

export const GET_RECIPE = gql`
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      title
      image
      description
      difficulty
      size
      preparationTime
      ingredients {
        items {
          item {
            id
            name
            image
            unit
          }
        }
      }
      quantities {
        id
        quantity
      }
      steps {
        position
        image
        description
      }
    }
  }
`;
