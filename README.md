# tfs for node

Simple cross-platform TFS client & nodejs library. This wraps [TEE](https://www.visualstudio.com/en-us/products/team-explorer-everywhere-vs.aspx) with a comfy node API and command-line client.

* install global: `npm install -g konsumer/tfs`

## library usage

### ES6

```js
import Tfs from 'tfs'

const tfs = new Tfs({
  collection: "",
  workspace: "",
  login: "" // username@domain,password
})

tfs.get(['.'])
  .then((out) => {
    console.log(out)
  })
  .catch((err) => {
    throw err
  })
```

### ES5

```js
var Tfs = require('tfs')

var tfs = new Tfs({
  collection: "",
  workspace: "",
  login: "" // username@domain,password
})

tfs.get(['.'])
  .then(function (out) {
    console.log(out)
  })
  .catch(function (err) {
    throw err
  })

```

## command syntax

```
tfs add         Adds new files and folders from a local file system location
               to Team Foundation version control.

tfs branch      Copies an item or set of items, including metadata and version
               control history, from one location to another on the Team
               Foundation version control server and in the workspace.

tfs branches    Displays the history of a branch for a specified file or folder.

tfs changeset   Displays information about a changeset and lets you change the
               associated attributes, such as comments and check-in notes.

tfs checkin     Commits pending changes in the current workspace to Team
               Foundation version control.

tfs checkout    Makes the local file writable and changes its pending Change
               status to "edit" in the workspace. Edit is an alias for the
               Checkout command.

tfs certificates  Configures how client authentication certificates are
                 used when connecting to TFS through a secure connection.

tfs configure   Enables an administrator to view and change the following
               configuration settings for a team project in the Source Control
               Settings dialog box:
               - Check-out settings
               - Check-in policies
               - Check-in notes

tfs connections Displays information about the registered Team Foundation
               connections in the system, as well as perform actions to
               remove a connection and switch the authenticated user of
               a connection.

tfs delete      Removes files and folders from Team Foundation version
               control and deletes them from the disk.

tfs destroy     Destroys, or permanently deletes, version-controlled files from
               Team Foundation version control.

tfs diff        Compares, and if it is possible, displays differences between
               two files, files in two folders, or a shelveset and a local or
               server file.

tfs dir         Displays all or part of the contents of Team Foundation version
               control.

tfs folderdiff  Display a visual representation of the differences between files
               in two server folders, in a server folder and a local folder, or
               in two local folders.

tfs get         Retrieves a read-only copy of a file from Team Foundation
               Server to the workspace and creates folders on disk to contain
               it.

tfs history     Displays the revision history for one or more files and folders.

tfs info        Displays information about items under version control.

tfs label       Attaches a label to or removes a label from a version of a file
               or folder in Team Foundation version control.

tfs labels      Displays the list of labels in Team Foundation version control.

tfs localversions  Displays the version of one or more items in a workspace.

tfs lock        Locks or unlocks a file or folder to deny or restore the
               permissions of users to check out an item for edit into
               a different workspace or to check in pending changes to an item
               from a different workspace.

tfs merge       Applies changes from one branch into another.

tfs merges      Displays detailed information about past merges between
               the specified source and destination branches.

tfs msdn        Launches the Microsoft Document Explorer to the documentation
               page for the command.

tfs permission  Modifies the user access control list (ACL) and displays
               authorization settings for an item under version control.

tfs property    Displays and pends changes on properties associated with items
               under version control.

tfs proxy       Configures the proxy setting automatically or manually. You
               can also use the proxy command to add, delete, and list proxy
               server records.

tfs reconcile   Compares the current state of the workspace on disk with the
               server's view, either to clean the workspace or to promote
               unpended local changes.

tfs rename      Changes the name or the path of a file or folder. You can use
               the rename command or the alias move, to move a file or folder
               to a new location.

tfs resolve     Resolves conflicts between changed items in your workspace and
               the latest or destination versions of items on the server.

tfs rollback    Rolls back the changes in a single or a range of changesets.

tfs shelve      Stores a set of pending changes, together with pending check-in
               notes, a comment, and a list of associated work items in Team
               Foundation Server without actually checking them into the
               version control server.

tfs shelvesets  Displays information about a set of shelved changes.

tfs status      Displays information about pending changes to items in one or
               more workspaces.

tfs undelete    Restores items that were previously deleted.

tfs undo        Removes pending changes from a workspace.

tfs unlabel     Removes an item from an existing label in Team Foundation
               version control.

tfs unshelve    Restores shelved file revisions, check-in notes, comments, and
               work item associations to the current workspace or removes
               an existing shelveset from the server.

tfs view        Retrieves a specific version of a file to a temporary folder on
               your computer and displays it.

tfs workfold    Creates, modifies, or displays information about the mappings
               between your workspace folders and the Team Foundation version
               control folders.

tfs workspace   Creates, deletes, displays, or modifies properties and mappings
               associated with a workspace.

tfs workspaces  Displays information about workspaces in the system and updates
               cached information about a user name or computer name change on
               Team Foundation Server.
```