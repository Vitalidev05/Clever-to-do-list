# Innowise Lab Internship Level 1 Clever todo list
[TASK](https://docs.google.com/document/d/1heFuihWrsw14bCpUdr6fla9ysqE6IrsobSMKAOpBiKA)

# Demo
[Clever-todo-list](https://lucid-mestorf-bf405b.netlify.app/)

# How to run the app
1. Clone this repo:
  ```
  $ git clone https://github.com/KantyshVitali/Innowise-Lab-Internship-Level-1-Clever-to-do-list.git
  ```
2. Open the directory in code editor
3. Run npm install
  ```$ npm install```
4. Using git checkout enter in branch
	 ```$ git checkout branch_name"``` 
5.  Run the application with the command
      ```$ npm run dev```

# npm scripts
- For run project locally 
```$ npm run dev```
- For build project 
```$ npm run build```
- For run prettier
```$ npm run prettier:format```
- For eslint check errors
```$ npm run lint```
- For eslint fix errors
```$ npm run lint:fix```


# Folders sturture
```
└──src
    ├──components					        # React components
        ├──App						        # App component
            ├──App.tsx
            ├──index.ts
            └──App.scss
        ├──AppRouter				      # AppRouter component for routes
            ├──AppRouter.tsx
            └──index.ts  
        ├──Calendar					      # Calendar component
            ├──AddTodo				    # AddTodo component
                ├──AddTodo.tsx
                ├──AddTodo.scss
                └──index.ts
            ├──Date					      # Date component
                ├──Date.scss
                ├──Date.tsx
                └──index.ts
            ├──Day					      # Day component
                ├──Day.scss
                ├──Day.tsx
                └──index.ts
            ├──Todo					      # Todo component
                ├──Todo.scss
                ├──Todo.tsx
                └──index.ts
            ├──Calendar.scss		
            ├──Calendar.tsx
            └──index.ts       
         ├──Home					        # Home component
             ├──Home.tsx
             └──index.ts
         ├──Loader					      # Loader component
             ├──Loader.tsx
             └──index.ts
         ├──Login					        # Login component
             ├──Login.tsx
             └──index.ts
         └──NavBar					      # NavBar component
             ├──NavBar.tsx
             └──index.ts
	├──const						            # const data for project
	    ├──date.ts
	    └──index.ts
    ├──hooks						          # custom hooks to connect redux
	    ├──useAction.ts
	    └──useTypedSelector.ts
	├──store						            # redux store
	    ├──actions					        # store actions
		    ├──actions.ts			
		    ├──actionTypes.ts
		    └──index.ts
	    ├──reducers					        # store reducers
		    ├──authFirebase.ts
		    ├──calendar.ts
		    └──rootReducer.ts
	    └──index.ts
    ├──utils						          # utils for project
	    ├──arrayUtils.ts
	    └──index.ts
	├──index.tsx					
	├──initFirebase.ts				
	└──routes.ts					
	    
```
# FIRESTORE STRUCTURE

```
    └──Users                            		    #main collection for users
	    └──UserId                       			    #user id document
	        └──date                    				    #collection of dates with tasks for a specific user
	            └──dateid               			    #date with tasks example 16_03_2021
				          └──todos						          #todos for current user for current date
					            └──todoId					        #current todo id	                        
	                        ├──taskName      	    #task name (string)
                              ├──taskText       #task description (string)(string)
                              ├──done           #task status (true/false)
                              └──date           #task date (string)

```
 # APPLICATION STACK
 
### React

### TypeScript

### Redux
