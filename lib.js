import path from 'path'

const tfs_command = path.join(__dirname, 'TEE-CLC-14.0.1', 'tf')

export default class Tfs {
  constructor(options) {
    this.optionsDefaults = options
    
    this.commands = [
      'add',
      'branch',
      'branches',
      'changeset',
      'checkin',
      'checkout',
      'certificates',
      'configure',
      'connections',
      'delete',
      'destroy',
      'diff',
      'dir',
      'folderdiff',
      'get',
      'history',
      'info',
      'label',
      'labels',
      'localversions',
      'lock',
      'merge',
      'merges',
      'msdn',
      'permission',
      'property',
      'proxy',
      'reconcile',
      'rename',
      'resolve',
      'rollback',
      'shelve',
      'shelvesets',
      'status',
      'undelete',
      'undo',
      'unlabel',
      'unshelve',
      'view',
      'workfold',
      'workspace',
      'workspaces'
    ]
    
    this.commands.forEach((command) => {
      this[command] = (paths, params) => {
        return this.tfs(command, paths, Object.extend(this.optionsDefaults, params))
          .then(this.parse(command))
      }
    })

    this.parsers = {}


  }

  // return a parser for the command
  parse(command) {
    return this.parsers[command] || (output) => {
      return output
    }
  }

  // run a tfs command
  tfs(command, paths, options){
    return new Promise((resolve, reject) => {
      console.log(command, paths, options)
    })
  }
}
