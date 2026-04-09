# andasy.hcl app configuration file generated for mybrand154 on Thursday, 26-Mar-26 05:18:46 CAT
#
# See https://github.com/quarksgroup/andasy-cli for information about how to use this file.

app_name = "mybrand154"

app {

  env = {}

  port = 80

  primary_region = "kgl"

  compute {
    cpu      = 1
    memory   = 256
    cpu_kind = "shared"
  }

  process {
    name = "mybrand154"
  }

}
