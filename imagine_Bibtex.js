// Needs :
// <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
// <script src=" .. /BibTex.js"></script>

////////////////////////////////////////////////////////////////////////////////

var BIB_FILE           = "https://ImaginePublications.github.io/imagine_publications.bib";

var default_images_dir = "https://ImaginePublications.github.io/images/papers/";
var default_image      = "https://ImaginePublications.github.io/images/papers/default_image.png";

var authors_url = [
    "Mathieu Aubry", "http://imagine.enpc.fr/~aubrym/",
    "Fran&ccedil;ois Darmon", "http://imagine.enpc.fr/~darmonf",
    "Yuming Du", "https://imagine-lab.enpc.fr/staff-members/yuming-du/",
    "Hugo Germain", "https://www.hugogermain.com/",
    "Thibault Groueix", "http://imagine.enpc.fr/~groueixt/",
    "Pierre-Alain Langlois", "http://imagine.enpc.fr/~langloip/",
    "Vincent Lepetit", "http://imagine.enpc.fr/~lepetitv/",
    "Tom Monnier", "http://imagine.enpc.fr/~monniert/",
    "Giorgia Pitteri", "https://imagine-lab.enpc.fr/staff-members/giorgia-pitteri/",
    "Renaud Marlet", "http://imagine.enpc.fr/~marletr/",
    "Marie-Morgane Paumard", "https://perso-etis.ensea.fr/paumard/",
    "David Picard", "https://davidpicard.github.io/",
    "Xuchong Qiu", "https://imagine-lab.enpc.fr/staff-members/xuchong-qiu/",
    "Micha&euml;l Ramamonjisoa", "https://michaelramamonjisoa.github.io/",
    "Othman Sbai", "http://imagine.enpc.fr/~sbaio/pix2vec/",
    "Xi Shen", "https://xishen0220.github.io/",
    "G&uuml;l Varol", "https://www.robots.ox.ac.uk/~gul/",
    "Chaohui Wang", "https://imagine-lab.enpc.fr/staff-members/chaoi-wang/",
    "Yang Xiao", "https://youngxiao13.github.io/"
];

var expanded_venues = [
    "3DV",   "International Conference on 3D Vision", "3DV",
    "ThreeDV",   "International Conference on 3D Vision", "3DV",
    "ACCV",  "Proceedings of the Asian Conference on Computer Vision", "ACCV",
    "arXiv", "arXiv Preprints", "",
    "ARXIV", "arXiv Preprints", "",
    "BMVC",  "Proceedings of the British  Machine Vision Conference", "BMVC",
    "CVIU",  "Computer Vision and Image Understanding", "CVIU",
    "CVPRW",  "Workshop at the IEEE Conference on Computer Vision and Pattern Recognition", "CVPRW",
    "CVPR",  "Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition", "CVPR",
    "ECCVW",  "Workshop at the European Conference on Computer Vision", "ECCVW",
    "ECCV",  "Proceedings of the European Conference on Computer Vision", "ECCV",
    "ICASSP", "Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing", "ICASSP",
    "ICCV Workshop", "do not expand", "",
    "ICCV",  "Proceedings of the International Conference on Computer Vision", "ICCV",
    "ICCVW", "Workshop at the International Conference on Computer Vision", "ICCV Workshop",
    "ICIP",  "International Conference on Image Processing", "ICIP",
    "ICLR",  "International Conference on Learning Representations", "ICLR",
    "IJCV",  "International Journal of Computer Vision", "IJCV",
    "ISMAR", "Proceedings of the International Symposium on Mixed and Augmented Reality", "ISMAR",
    "MICCAI", "Proceedings of the Conference on  Medical Image Computing and Computer Assisted Intervention", "MICCAI",
    "NIPS",  "Advances in Neural Information Processing Systems", "NIPS",
    "PAMI",  "IEEE Transactions on Pattern Analysis and Machine Intelligence", "PAMI",
    "VR",    "Proceedings of the IEEE Virtual Reality Conference", "VR",
    "WACV",  "IEEE Winter Conference on Applications of Computer Vision", "WACV"
];

////////////////////////////////////////////////////////////////////////////////

var style = document.createElement('style');
style.innerHTML = `
div.publications h2 {
    color: rgb(60, 60, 100);
    font-size: 120%;
    font-weight: bold;
}

div.publications table#publis {
    width: 100%;
    border-collapse: collapse;
}

div.publications table#publis tr {
    vertical-align: top;
    border-bottom: 2px solid rgb(200, 200, 200);
}

div.publications table#publis tr:last-child {
    border-bottom: none;
}

div.publications table#publis td {
    padding-bottom: 30px;
    padding-top: 30px;
    padding-left: 5px;
}

div.publications table#publis .image_col {
    width: 25%;
}

div.publications .thumbnail {
    width: 100%;
/*    border: 2px solid rgb(76, 157, 150); */
}

div.publications .title {
    font-weight: bold;
}

.publications a.title {
    color: rgb(76, 157, 150);
    font-weight: bold;
}

div.publications .abbrev {
    font-weight: bold;
}

div.publications .tldr {
    font-size: 90%;
    font-weight: bold;
}

div.publications .presentation {
    font-weight: bold;
}

div.publications .tldr_text {
    font-size: 90%;
    font-style: italic;
}

.publications .note {
    font-size: 90%;
    font-style: italic;
    /* color: rgb(157, 76, 83); */
}

div.publications p {
    margin-top: 6px;
}

div.publications .bibtex_error {
    font-size: 50%;
}

table#publis_mobile {
    width: 100%;
    border-left: 1px solid rgb(0, 00, 00);
    border-top: 1px solid rgb(200, 200, 200);
    border-right: 1px solid rgb(200, 200, 200);
    border-bottom: 1px solid rgb(200, 200, 200);
}

table#publis_mobile td {
    padding-bottom : 15px;
    padding-top : 15px;
    padding-left : 5px;
}

table#publis_mobile tr {
}
`;

var ref = document.querySelector('script');
ref.parentNode.insertBefore(style, ref);

////////////////////////////////////////////////////////////////////////////////

// stupid French people^D^D accents:
var accents_latex_html = [
    "\\`a", "&agrave;"     ,
    "\\^a", "&acirc;"      ,
    "{\\c c}", "&ccedil;" ,
    "{\\c{c}}", "&ccedil;" ,
    "{\\'E}", "&Eacute;"   ,
    "{\\'e}", "&eacute;"   ,
    "\\'e", "&eacute;"     ,
    "{\\`e}", "&egrave;"   ,
    "\\`e", "&egrave;"     ,
    "{\\^e}", "&eacirc;"   ,
    "\\^e", "&eacirc;"     ,
    '\\"e', "&euml;"       ,
    '\\"o', "&ouml;"       ,
    '\\"u', "&uuml;"
];

var do_not_capitalize_these_words = [
    "a", "and", "by", "for", "from", "in", "of", "to", "with", "without"
]

////////////////////////////////////////////////////////////////////////////////

function uniformize_venue(venue) {
    v = expanded_venues;
    for(var i = 0; i < v.length; i+=3) {
	if (venue.includes(v[i])) {
	    if (v[i+1] == "do not expand") {
		return venue;
	    }
	    if (v[i+2] != "") {
		return v[i+1] + " (<span class=\"abbrev\">" + v[i+2] + "</span>)";
	    } else {
		return v[i+1];
	    }
	}
    }

    return venue;
}

function add_author_url(author) {
    u = authors_url;
    for(var i = 0; i < u.length; i+=2) {
	if (author == u[i]) {
	    return "<a href=\"" + u[i+1] + "\">" + author + "</a>";
	}
    }
    return author;
}

function extract(entry, field)
{
    if (array_key_exists(field, entry)) {
	field_text = entry[field];
	field_text.replace(/\s+/, ' ');
	return trim(field_text);
    } else {
	return "";
    }
}

function change_latex_accents_to_html_accents(str)
{
    for(var i = 0; i < accents_latex_html.length; i+=2) {
	str = str.replace(accents_latex_html[i], accents_latex_html[i+1]);
    }

    return str;
}

function capitalize(str)
{
    var result = "";
    var cap = 1;
    for(var i = 0; i < str.length; i++) {
	if (cap == 1) {
	    result += str[i].toUpperCase();
	    cap = 0;
	} else {
	    result += str[i];
	}
	if (str[i] == ' ' || str[i] == '-') {
	    cap = 1;
	}
    }

    for(var i = 0; i < do_not_capitalize_these_words.length; i++) {
	var orig = do_not_capitalize_these_words[i];
	var cap = " " + orig[0].toUpperCase() + orig.slice(1) + " ";
	var not_cap = " " + orig + " ";
	result = result.replace(cap, not_cap);
    }

    // one dirty trick for a special case:
    result = result.replace(": a ", ": A ");

    return result;
}

function entry2html(entry, arxiv_vanity = false)
{
    var pdf = extract(entry, 'pdf');

    ////////////////////////////////////////////////////////////////////////////////

    var title = "";
    if (entry['entryType'] == 'inbook') {
	title = extract(entry, 'chapter');
    } else {
	title = extract(entry, 'title');
    }
    var title_html = "";
    title = capitalize(title);
    title = change_latex_accents_to_html_accents(title);
    if (pdf != "") {
	title_html = "<a class=\"title\" href=\"" + pdf + "\">" + trim(title) + "</a> [<a class=\"title\" href=\"" + pdf + "\">PDF</a>]";
    } else {
	title_html = "<span class=\"title\">" + trim(title) + "</span>";
    }

    ////////////////////////////////////////////////////////////////////////////////

    var authors_html = ""
    if (array_key_exists('author', entry)) {
    	var N = entry['author'].length;
    	if (N == 1) {
    	    authors_html = add_author_url(change_latex_accents_to_html_accents(bibtex_entries._formatAuthor(entry['author'][0])));
    	}
    	if (N == 2) {
    	    authors_html = add_author_url(change_latex_accents_to_html_accents(bibtex_entries._formatAuthor(entry['author'][0])));
    	    authors_html += " and ";
    	    authors_html += add_author_url(change_latex_accents_to_html_accents(bibtex_entries._formatAuthor(entry['author'][1])));
    	}
    	if (N >= 3) {
    	    for (var i = 0; i < N-1; i++) {
    		authors_html += add_author_url(change_latex_accents_to_html_accents(bibtex_entries._formatAuthor(entry['author'][i])));
    		authors_html += ", "
    	    }
    	    authors_html += "and ";
    	    authors_html += add_author_url(change_latex_accents_to_html_accents(bibtex_entries._formatAuthor(entry['author'][N-1])));
    	}
	authors_html = "<span class=\"authors\">" + authors_html + "</span>";
    }

    ////////////////////////////////////////////////////////////////////////////////

    var venue_html = "";

    if (entry['entryType'] == 'inproceedings') {
	var booktitle = extract(entry, 'booktitle')
	venue_html = "In " + uniformize_venue(booktitle);
    } else if (entry['entryType'] == 'article') {
	var journal = extract(entry, 'journal')
	venue_html = uniformize_venue(journal);
    }

    ////////////////////////////////////////////////////////////////////////////////

    var year = extract(entry, 'year')
    var year_html = "<span class=\"year\">" + year + "</span>";

    ////////////////////////////////////////////////////////////////////////////////

    var presentation = extract(entry, 'presentation');
    var presentation_html = "";
    if (presentation != "") {
	presentation_html = " - <span class=\"presentation\">" + presentation + "</span>";
    }
    ////////////////////////////////////////////////////////////////////////////////

    var tldr = extract(entry, 'tldr');
    var tldr_html = "";
    if (tldr != "") {
	tldr_html = "<span class=\"tldr\">tldr: </span> <span class=\"tldr_text\">" + tldr + "</span>";
    }

    ////////////////////////////////////////////////////////////////////////////////

    var note = extract(entry, 'note');
    var note_html = "";
    if (note != "") {
	note_html = "<span class=\"note\">" + note + "</span>";
    }

    ////////////////////////////////////////////////////////////////////////////////

    var project_html = "";
    var project = extract(entry, 'project');
    if (project != '') {
	project_html += "<p><a href = \"" + project + "\">Link to project page</a></p>"
    }

    ////////////////////////////////////////////////////////////////////////////////

    var arxiv_vanity_html = "";
    if (arxiv_vanity) {
	    if (pdf.includes("arxiv")) {
		const regex = /[0-9\.]+\.pdf/;
                var index = pdf.match(regex);
		if (index != null) {
			index = index[0];
 			index = index.substr(0, index.length - 4)
 			arxiv_vanity_html = "<a href = \"https://www.arxiv-vanity.com/papers/" + index + "/\">View this paper on arXiv-Vanity</a>";
		}
	    } else {
	        arxiv_vanity_html = ""
	    }
    } else {
        arxiv_vanity_html = ""
    }
	
    ////////////////////////////////////////////////////////////////////////////////
	
    var sep = "<br>";
    // var sep = ". ";
	
    var end = "";
    if (project_html != "" && arxiv_vanity_html != "") {
	end = "<p>" + project_html + " - " + arxiv_vanity_html + "</p>";
    } else if (project_html != "" && arxiv_vanity_html == "") {
	end = "<p>" + project_html + "</p>";
    } else  if (project_html == "" && arxiv_vanity_html != "") {
	end = "<p>" + arxiv_vanity_html + "</p>";
    }

    if (entry['entryType'] == 'inproceedings') {
	return title_html + ". " + authors_html + ". " + venue_html + ", " + year_html + ". " + note_html + end;
    } else if (entry['entryType'] == 'article') {
	return title_html + ". " + authors_html + ". " + venue_html + ", " + year_html + ". " + note_html + end;
    } else if (entry['entryType'] == 'inbook') {
	var booktitle = extract(entry, 'title');
	var booktitle_html = "Chapter in <span class=\"in\">" + booktitle + "</span>";
	var ret = title_html + ". " + authors_html + ". " + booktitle_html;
	var publisher = extract(entry, 'publisher');
	if (publisher != "") {
	    var publisher_html = "<span class=\"publisher\">" + publisher + "</span>";
	    ret += ". " + publisher_html;
	}
	ret += ", " + year_html + ". " + note_html + end;
	return ret;
    } else if (entry['entryType'] == 'techreport') {
	var ret = title_html + ". " + authors_html + ". ";
	ret += "<span class=\"in\">Technical Report</span>";
	var institution = extract(entry, 'institution');
	if (institution != "") {
	    ret += ", <span class=\"institution\">" + institution + "</span>";
	}
	var number = extract(entry, 'number');
	if (number != "") {
	    ret += ", <span class=\"number\">" + number + "</span>";
	}
	ret += ", " + year_html + ". " + note_html + end;
	return ret;
    } else if (entry['entryType'] == 'hdr') {
	return title_html + ". " + authors_html + ". " + venue_html + ", " + year_html + ". " + note_html;
    } else if (entry['entryType'] == 'phdthesis') {
	var ret = title_html + sep + authors_html + sep;
	ret += "<span class=\"in\">PhD Thesis</span>";
	var school = extract(entry, 'school');
	if (school != "") {
	    ret += ", <span class=\"school\">" + change_latex_accents_to_html_accents(school) + "</span>";
	}
	ret += ", " + year_html + "." + sep + note_html + project_html;
	return ret;
    }

    ////////////////////////////////////////////////////////////////////////////////

    return "<span class=\"bibtex_error\"> " + entry['entryType'] + ": entry type not implemented for " + title + "</span>";
}

function bibtex2html_BibTex(bibtex_entries)
{
    var year = Number(extract(bibtex_entries.data[0], 'year'))
    var min_year = year;
    var max_year = year;
    for (var i=0; i<bibtex_entries.data.length; i++){
	year = Number(extract(bibtex_entries.data[i], 'year'))
	if (year > max_year) { max_year = year; }
	if (year < min_year) { min_year = year; }
    }
    if (min_year < 2018) {
	min_year = 2018;
    }
    
    var ret = "";

    for (var current_year = max_year; current_year >= min_year; current_year--) {
	ret += "<h2>\n" + current_year.toString() + "</h2>\n";

	ret += "<table id=\"publis\">\n";

	for (var i=0; i<bibtex_entries.data.length; i++){
	    var entry = bibtex_entries.data[i];
	    var year = Number(extract(entry, 'year'));
	    if (year == current_year) {
		var img = extract(entry, 'img');
		var pdf = extract(entry, 'pdf');

		entry_html = entry2html(entry);

		var anchor_html = "<a id=\"" + entry['cite'] + "\"></a>";		
		
		ret += "<tr>\n";
		if (img != "") {
		    ret += "<td class=\"image_col\">";
		    if (pdf != "") {
			ret += "<a href = \"" + pdf + "\">";
		    }
		    ret += "<img alt = \"<missing>\"";
		    ret += " src = \"";
		    if (img.substring(0,4) != "http") {
			ret += default_images_dir;
		    }
		    ret += img + "\" class = \"thumbnail\" onerror=\"this.src = '" + default_image + "';\"></img>";
		    if (pdf != "") {
			ret += "</a>";
		    }
		    ret += "</td><td>";
		    ret += anchor_html;
		    ret += entry_html;
		    ret += "</td></tr>\n";
		} else {
		    ret += "<td colspan=\"2\">";
		    ret += anchor_html;
		    ret += entry_html;
		    ret += "</td>";
		}
		ret += "</tr>\n";
	    }
	}
	ret += "</table>\n";
    }

    return ret;
}

function bibtex2html_BibTex_on_mobile(bibtex_entries)
{
    var year = Number(extract(bibtex_entries.data[0], 'year'))
    var min_year = year;
    var max_year = year;
    for (var i=0; i<bibtex_entries.data.length; i++){
	year = Number(extract(bibtex_entries.data[i], 'year'))
	if (year > max_year) { max_year = year; }
	if (year < min_year) { min_year = year; }
    }

    var ret = "";
	
    for (var current_year = max_year; current_year >= min_year; current_year--) {
	ret += "<h2>\n" + current_year.toString() + "</h2>\n";

	for (var i=0; i<bibtex_entries.data.length; i++){
	    var entry = bibtex_entries.data[i];
	    var year = Number(extract(entry, 'year'));
	    if (year == current_year) {
		var img = extract(entry, 'img');
		pdf = extract(entry, 'pdf');
		
		entry_html = entry2html(entry, true);
		var anchor_html = "<a id=\"" + entry['cite'] + "\"></a>";		
		ret += anchor_html;

		ret += "<table id=\"publis_mobile\">\n";
		ret += "<tr>\n";
		    
		if (img != '') {
		    ret += "<td>";
		    if (pdf != '') {
			ret += "<a href = \"" + pdf + "\">";
		    }

		    ret += "<img alt = \"<missing>\"";
		    ret += " src = \"";
		    if (img.substring(0,4) != "http") {
			ret += default_images_dir;
		    }
		    ret += img + "\" class = \"thumbnail\" onerror=\"this.src = '" + default_image + "';\"></img>";
		    if (pdf != '') {
			ret += "</a>";
		    }
		    ret += "</td></tr><tr><td>";
		    ret += entry_html;
		    ret += "</td></tr>\n";
		} else {
		    ret += "<td>";
		    ret += entry_html;
		    ret += "</td>";
		}
		ret += "</tr>\n";
         	ret += "</table>\n";		    
	    }
	}

    }

    return ret;
}


function bibtex2html_bibfile(bibfile_name, list_of_publications_id)
{
    jQuery.get(bibfile_name, function(textString) {
	bibtex_entries = new BibTex();
	bibtex_entries.content = textString;
	bibtex_entries.parse();
	    
	let we_are_on_mobile = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) we_are_on_mobile = true;})(navigator.userAgent||navigator.vendor||window.opera);

	// for debugging on laptop:
	we_are_on_mobile = true;
	if (we_are_on_mobile) {
            document.getElementById(list_of_publications_id).innerHTML = bibtex2html_BibTex_on_mobile(bibtex_entries);
        } else {
            document.getElementById(list_of_publications_id).innerHTML = bibtex2html_BibTex(bibtex_entries);
        }

    });
}

////////////////////////////////////////////////////////////////////////////////

bibtex2html_bibfile(BIB_FILE, "list_of_publications_here")
