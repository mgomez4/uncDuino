
import os, shutil

class cd:
    """Context manager for changing the current working directory"""
    def __init__(self, newPath):
        self.newPath = os.path.expanduser(newPath)

    def __enter__(self):
        self.savedPath = os.getcwd()
        os.chdir(self.newPath)

    def __exit__(self, etype, value, traceback):
        os.chdir(self.savedPath)

destiny = os.path.join(os.getcwd(),"src","scripts")

with cd("blockly"):
  print("*******************************************")
  print("Mergeando y comprimiendo blockly y Arduino...")
  os.system(os.path.join(os.getcwd(),"build.py"))
  print("*******************************************")
  print("Copiando blockly y arduino...")
  shutil.copy("arduino_compressed.js",destiny)
  shutil.copy("blockly_compressed.js",destiny)
  shutil.copy("blocks_compressed.js",destiny)
  shutil.copy(os.path.join(os.getcwd(),"msg","js","es.js"),destiny)
print("*******************************************")


