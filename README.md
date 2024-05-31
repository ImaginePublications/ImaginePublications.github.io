If you want to add your publications to https://imagine-lab.enpc.fr/publications/:

1. If you are not a contributor yet, ask me (vincent.lepetit@enpc.fr) to add you. 

You can simply use the GitHub website, but if you want to use your favorite tools, get the repository:

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
**For `journal` and `booktitle`, please use the standard acronym (PAMI, CVPR, etc.)** *without* { } nor " ". If your journal / conference is not known yet by the script, you can add it to the `image_Bibtex.js` file (check the `expanded_venues` array) OR simply give the name in { }

The other fields are optional:
- `img`:  Add your image to the repository in the `images/papers` directory (don't forget to `git add` your file if you use a local copy and not the GitHub website) and put the filename for the value of field `img`. Please use relatively small images (max 400x400 pixels) to make sure the publication page loads fast enough. Only give the filename (no url, no path).
- `pdf`: A link to a pdf of your paper. arXiv and the conference website if the pdfs are public are already probably the most resilient places.
- `project`: Provide a link to a project page related to your paper.
- `note`: Anything brief you want to mention (e.g. "To appear", "The two first authors have equal contributions").
- `presentation`: e.g. "Oral", "Spotlight".
- `tldr`: Too Long Didnt Read.  1 sentence describing your paper.

3. Commit your changes ("Commit directly to the main branch").

4. Wait about a minute and check if your publication appears on the Imagine website https://imagine-lab.enpc.fr/publications/  (reload the page by pressing Shift when clicking the Reload arrow on Chrome and Safari...)

