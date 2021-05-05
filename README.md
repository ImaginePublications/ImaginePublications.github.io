If you want to add your publications :

1. If you are not a contributor yet, ask me (vincent.lepetit@enpc.fr) to add you. If you want to use your favorite tools, get the repository:

`git clone `

2. Edit file `imagine_publications.bib`. The syntax is the same as a standard bibfile with some additional fields.  You can use one of the following templates:
`
@article{,
  title = {{}},
  author = {},
  journal = ,
  year = ,
  pdf = {},
  img = {},
  project = {}
  note = {},
  presentation = {},
  tldr = {}
}
`
and
`
@inproceedings{,
  title = {{}},
  author = {},
  booktitle = ,
  year = ,
  img = {},
  project = {}
  note = {},
  presentation = {}
  tldr = {}
}
`

Fill at least the `title`, `author`, `journal`/`booktitle`, `year` fields. For `journal` and `booktitle`, please use the standard acronym (PAMI, CVPR, etc.) *without* { } nor " ". If your journal / conference is not known yet, you can add it at the beginning of the `image_Bibtex.js` file.

For the other fields:
- `img`:  2 possibilities -> a) You can use a url to an image. b) You can add your image to the repository in the `images/papers` directory (remember to do `git add` your file) and put the filename for the value of field `img`. Please use relatively small images (max 400x400 pixels). The script makes the difference between a) and b) by looking for `http` and `https` in the value.
- `project`: Provide a link to a project page related to your paper.
- `note`: Whatever you want to mention (e.g. "To appear", "The four first authors have equal contributions").
- `presentation`: e.g. "Oral", "Spotlight".
- `tldr`: Too Long Didnt Read.  1 sentence that describes your paper.

3. `git push` and `git commit` your changes.

4. On https://github.com/ImaginePublications/ImaginePublications.github.io/ , create a new Release.  Wait a few sec and check if your publication appears on the Imagine website https://imagine-lab.enpc.fr/publications/

