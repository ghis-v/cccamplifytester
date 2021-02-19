/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNode = /* GraphQL */ `
  mutation CreateNode( 
  $role: Int!, $name: String!, $parentid: Int!    
  ) {
    createNode(role: $role, name: $name, parentid: $parentid) {
      id
      name
	  parentid
      role
    }
  }
`;



export const createNodeWithInput = /* GraphQL */ `
	mutation CreateNodeWithInput( 
	$input: NodeInput!
	) {
		createNodeWithInput( input : $input ){
			id
			name
			parentid
			role
		}
  }
`;
