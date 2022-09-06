EstNLTK -- Open source tools for Estonian natural language processing
=====================================================================

EstNLTK provides common natural language processing functionality such as paragraph, sentence and word tokenization,
morphological analysis, named entity recognition, etc. for the Estonian language.

The project is funded by EKT ([Eesti Keeletehnoloogia Riiklik Programm](https://www.keeletehnoloogia.ee/)).

### Installation

EstNLTK is available for osx, windows-64, and linux-64, and for python versions 3.7 to 3.10. 
You can install the latest version via PyPI:

```
pip install estnltk==1.7.1
```

Alternatively, you can install EstNLTK via [Anaconda](https://www.anaconda.com/download). Installation steps with conda:

1. [create a conda environment](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#creating-an-environment-with-commands) with python 3.8, for instance:
```
conda create -n py38 python=3.8
```

2. [activate the environment](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#activating-an-environment), for instance:
```
conda activate py38
```

3. install EstNLTK with the command:
```
conda install -c estnltk -c conda-forge estnltk=1.7.1
```

_Note_: for using some of the tools in estnltk, you also need to have Java installed in your system. We recommend using Oracle Java http://www.oracle.com/technetwork/java/javase/downloads/index.html, although alternatives such as OpenJDK (http://openjdk.java.net/) should also work.

### Using on Google Colab

You can install EstNLTK on [Google Colab](https://colab.research.google.com) environment via command:

```
!pip install estnltk==1.7.1
```

### Documentation

EstNLTK's tutorials come in the form of [jupyter notebooks](http://jupyter.org).

  * [Starting point of tutorials](https://github.com/estnltk/estnltk/blob/main/tutorials/README.md) | [tutorials folder](https://github.com/estnltk/estnltk/blob/main/tutorials/)
  
Additional educational materials on EstNLTK are available on web pages of an NLP course taught at the University of Tartu:

  * [https://github.com/d009/EstNLP](https://github.com/d009/EstNLP) (in Estonian)


Note: if you have trouble viewing jupyter notebooks in github (you get an error message _Sorry, something went wrong. Reload?_ at loading a notebook), then try to open notebooks with the help of [https://nbviewer.jupyter.org](https://nbviewer.jupyter.org)

### Source

As of version 1.7, the EstNLTK library has been split into 3 Python packages:

* `estnltk_core` -- package containing core data structures, interfaces and data conversion functions of the EstNLTK library;
* `estnltk` -- the standard package, which contains basic linguistic analysis (including Vabamorf's morphological analysis, syntactic parsing and information extraction tools), system taggers and Postgres database tools;
* `estnltk_neural` -- package containing additional linguistic analysis based on neural models (Bert embeddings tagger, Stanza syntax taggers and neural morphological tagger);

Source code of packages is available at the [EstNLTK's monorepository](https://github.com/estnltk/estnltk/tree/main).  

Changelog is available [here](https://github.com/estnltk/estnltk/blob/main/CHANGELOG.md).

### `estnltk_neural`

Tools in `estnltk_neural` require installation of deep learning frameworks (`tensorflow`, `pytorch`), and are demanding for computational resources; they also rely on large models which need to be downloaded separately. 
Instructions for installing the package can be found [here](https://github.com/estnltk/estnltk/blob/main/estnltk_neural/README.md).

### Citation

In case you use EstNLTK in your work, please cite us as follows:

    @InProceedings{laur-EtAl:2020:LREC,
      author    = {Laur, Sven  and  Orasmaa, Siim  and  Särg, Dage  and  Tammo, Paul},
      title     = {EstNLTK 1.6: Remastered Estonian NLP Pipeline},
      booktitle = {Proceedings of The 12th Language Resources and Evaluation Conference},
      month     = {May},
      year      = {2020},
      address   = {Marseille, France},
      publisher = {European Language Resources Association},
      pages     = {7154--7162},
      url       = {https://www.aclweb.org/anthology/2020.lrec-1.884}
    }


(C) University of Tartu  