If you want to add your publications to https://imagine-lab.enpc.fr/publications/:

1. If you are not a contributor yet, ask me (vincent.lepetit@enpc.fr) to add you. 

You can use the GitHub website, but if you want to use your favorite tools, get the repository:

`git clone https://github.com/ImaginePublications/ImaginePublications.github.io.git`

2. Edit `imagine_publications.bib` to add your publications. The syntax is the same as for a standard bibfile with some additional fields.  You can use one of the following templates:
```
@article{ <key> ,
  title = {{}},
  author = {},
  journal = ,
  year = ,
  pdf = {},
  img = {},
  project = {},
  note = {},
  presentation = {},
  tldr = {}
}
```
and
```
@inproceedings{ <key> ,
  title = {{}},
  author = {},
  booktitle = ,
  year = ,
  pdf = {}, 
  img = {},
  project = {},
  note = {},
  presentation = {},
  tldr = {}
}
```

Fill in the key (you can use anything) and at least the `title`, `author`, `journal`/`booktitle`, `year` fields. 
**For `journal` and `booktitle`, please use the standard acronym (PAMI, CVPR, etc.)** *without* { } nor " ". If your journal / conference is not known yet by the script, you can add it to the `image_Bibtex.js` file (check the `expanded_venues` array).

For the other fields:
- `img`:  2 possibilities -> a) You give a url to an image. b) You  add your image to the repository in the `images/papers` directory (don't forget to `git add` your file) and put the filename for the value of field `img`. Please use relatively small images (max 400x400 pixels). The script makes the difference between a) and b) by looking for `http` and `https` in the value. For b), only give the filename (no url, no path).
- `pdf`: A link to a pdf of your paper. arXiv and the conference website if the pdfs are public are probably the most resilient places.
- `project`: Provide a link to a project page related to your paper.
- `note`: Anything brief you want to mention (e.g. "To appear", "The two first authors have equal contributions").
- `presentation`: e.g. "Oral", "Spotlight".
- `tldr`: Too Long Didnt Read.  1 sentence that describes your paper.

3. Commit your changes.

4. On https://github.com/ImaginePublications/ImaginePublications.github.io/, create a new Release.  Wait a few sec and check if your publication appears on the Imagine website https://imagine-lab.enpc.fr/publications/

