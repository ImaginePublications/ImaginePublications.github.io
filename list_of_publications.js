var list_of_publications = `

% 2021: %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

@inproceedings{hampali_cvpr21,
  author = {Shreyas Hampali and Sinisa Stekovic and Sayan Deb Sarkar
                  and Chetan Srinivasa Kumar and Friedrich Fraundorfer
                  and Vincent Lepetit},
  title = {{Monte Carlo Scene Search for 3D Scene Understanding}},
  booktitle = CVPR,
  year = 2021,
  img = {hampali_cvpr21.png},
  pdf = {https://arxiv.org/pdf/2103.07969.pdf},
  note = {The two first authors have equal contributions}
}

@inproceedings{germain_cvpr21,
  author = {Hugo Germain and Vincent Lepetit and Guillaume Bourmaud:},
  title = {{Neural Reprojection Error: Merging Feature Learning and Camera Pose Estimation}},
  booktitle = CVPR,
  year = 2021,
  pdf = {https://arxiv.org/pdf/2103.07153.pdf},
  img = {germain_cvpr21.png}
}

@inproceedings{ramamonjisoa_cvpr21,
  author = {Michael Ramamonjisoa and Michael Firman and Jamie Watson
                  and Vincent Lepetit and Daniyar Turmukhambetov},
  title = {{Single Image Depth Prediction with Wavelet Decomposition}},
  booktitle = CVPR,
  year = 2021,
  img = {ramamonjisoa_cvpr21.png}
}

% 2020: %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

@inproceedings{monnier2020dticlustering,
	author = {Monnier, Tom and Groueix, Thibault and Aubry, Mathieu},
	booktitle = {Advances in Neural Information Processing Systems (NeurIPS)},
	title = {{Deep Transformation-Invariant Clustering}},
	pdf = {https://arxiv.org/pdf/2006.11132.pdf},
	year = {2020},
	img = {monnier2020dticlustering.png},
	tldr = {An interpretable approach to clustering by learning image transformations},
	presentation = {Oral},
	project = {http://imagine.enpc.fr/~monniert/DTIClustering/},
}

@inproceedings{monnier2020docextractor,
	author = {Monnier, Tom and Aubry, Mathieu},
	booktitle = {International Conference on Frontiers in Handwriting Recognition (ICFHR)},
	title = {{docExtractor: An off-the-shelf historical document element extraction}},
	pdf = {https://arxiv.org/pdf/2012.08191.pdf},
	year = {2020},
	img = {monnier2020docExtractor.jpg},
	tldr = {A generic method for extracting visual elements from historical documents},
	presentation = {Oral},
	project = {http://imagine.enpc.fr/~monniert/docExtractor/},
}

@inproceedings{pitteri_accv20,
  author = {Giorgia Pitteri and Aurélie Bugeau and Slobodan Ilic and Vincent Lepetit},
  title = {{3D Object Detection and Pose Estimation of Unseen Objects in Color Images with Local Surface Embeddings}},
  booktitle = ACCV,
  year = 2020,
  img = {pitteri_accv20.png},
  pdf = {https://openaccess.thecvf.com/content/ACCV2020/papers/Pitteri_3D_Object_Detection_and_Pose_Estimation_of_Unseen_Objects_in_ACCV_2020_paper.pdf}
}

@inproceedings{qiu_eccv20,
  title     = {Pixel-Pair Occlusion Relationship Map (P2ORM): Formulation, Inference \& Application},
  author    = {Xuchong Qiu and Yang Xiao and Chaohui Wang and Renaud Marlet},
  booktitle = ECCV,
  year      = {2020},
  pdf       = {https://arxiv.org/pdf/2007.12088.pdf}, 
  img       = {qiu2020pixel.png}, 
  tldr      = {Sharper occlusion boundaries and better depth maps from color images.}, 
  project   = {http://imagine.enpc.fr/~qiux/P2ORM/},
  presentation = {Spotlight},
}

@inproceedings{shen_eccv20,
  author = {Shen, Xi and Darmon, Fran{\c{c}}ois and Efros, Alexei A. and Aubry, Mathieu},
  title = {RANSAC-Flow: generic two-stage image alignment},
  booktitle = ECCV,
  year = 2020,
  pdf = {https://arxiv.org/pdf/2004.01526.pdf},
  img = {ransac_flow.jpg},
  project = {http://imagine.enpc.fr/~shenx/RANSAC-Flow/},
  presentation = {Spotlight},
}

@inproceedings{germain_eccv20,
  author = {Hugo Germain and Guillaume Bourmaud and Vincent Lepetit},
  title = {{S2DNet: Learning Accurate Correspondences for Sparse-to-Dense Feature Matching}},
  booktitle = ECCV,
  year = 2020,
  pdf = {https://arxiv.org/pdf/2004.01673.pdf},
  img = {germain_arxiv20.png},
  tldr = {A classification-based learning algorithm for the sparse-to-dense approach to image matching - current state-of-the-art on InLoc and HPatches.},
  presentation = {Spotlight},
}

@inproceedings{labbe_eccv20,
  author = {Yann Labbé and Justin Carpentier and Mathieu Aubry and Josef Sivic},
  title = {{CosyPose: Consistent Multi-View Multi-Object 6D Pose Estimation}},
  booktitle = ECCV,
  year = 2020,
  pdf = {https://arxiv.org/pdf/2008.08465.pdf},
  img = {labbe_eccv20.png},
  project = {https://www.di.ens.fr/willow/research/cosypose/}
}

@inproceedings{puy_eccv20,
  author = {Gilles Puy and Alexandre Boulch and Renaud Marlet},
  title = {{FLOT: Scene Flow on Point Clouds Guided by Optimal Transport}},
  booktitle = ECCV,
  year = 2020,
  pdf = {https://arxiv.org/pdf/2007.11142.pdf},
  img = {puy_eccv20.png},
  project = {https://github.com/valeoai/FLOT}
}

@INPROCEEDINGS{xiao_eccv20,
    author    = {Yang Xiao and Renaud Marlet},
    title     = {Few-Shot Object Detection and Viewpoint Estimation for Objects in the Wild},
    booktitle = ECCV,
    year      = {2020},
    pdf       = {https://arxiv.org/abs/2007.12107},
    img       = {xiao_eccv20.png},
    tldr      = {A simple approach to few-shot (object detection + viewpoint estimation) - significantly improves the state-of-the-art on various benchmarks.},
    project   = {http://imagine.enpc.fr/~xiaoy/FSDetView/}
}

@inproceedings{sbai_eccv20,
  author = {Othman Sbai and Camille Couprie and Mathieu Aubry},
  title = {{Impact of base dataset design on few-shot image classification}},
  booktitle = ECCV,
  year = 2020,
  pdf = {https://arxiv.org/pdf/2007.08872.pdf},
  img = {sbai_eccv20.png},
  project = {http://imagine.enpc.fr/~sbaio/website/publications/fewshot_dataset_design/index.html},
}

@inproceedings{stekovic_eccv20,
  author = {Sinisa Stekovic and Shreyas Hampali and Mahdi Rad and Sayan Deb Sarkar and Friedrich Fraundorfer and Vincent Lepetit},
  title = {{General 3D Room Layout from a Single View by Render-and-Compare}},
  booktitle = ECCV,
  year = 2020,
  tldr = {We use the intersection of 3D planes to create polygons for the walls, and an analysis-by-synthesis algorithm to deal with occlusions between walls.},
  pdf = {https://arxiv.org/pdf/2001.02149.pdf},
  img = {stekovic_eccv20.png},
}

@inproceedings{grabner_eccv20,
  author = {Alexander Grabner and Yaming Wang and Peizhao Zhang and Peihong Guo and Tong Xiao and Peter Vajda and Peter M. Roth and Vincent Lepetit},
  title = {{Geometric Correspondence Fields: Learned Differentiable Rendering for 3D Pose Refinement in the Wild}},
  booktitle = ECCV,
  year = 2020,
  tldr = {Our differentiable rendering combines an analytical gradient and a learned gradient to be robust to imaging artefacts.},
  pdf = {https://arxiv.org/pdf/2007.08939.pdf},
  img = {grabner_eccv20.png},
}

@inproceedings{armagan_eccv20,
  author = {Anil Armagan et al},
  title = {{Measuring Generalisation to Unseen Viewpoints, Articulations, Shapes and Objects for 3D Hand Pose Estimation under Hand-Object Interaction}},
  booktitle = ECCV,
  year = 2020,
  pdf = {https://arxiv.org/pdf/2003.13764.pdf},
  img = {armagan_eccv20.png},
}

@article{luvizon20tpami,
title= {"Multi-task Deep Learning for Real-Time 3D Human Pose Estimation and Action Recognition"},
author= {Diogo Luvizon and David Picard and Hedi Tabia},
journal= PAMI,
year= "2020",
img= tpami_luvizon.jpg,
pdf= {https://pdf.org/abs/1912.08077},
tldr= {We propose a multi-task framework for jointly estimating 2D or 3D human poses from monocular color imgs and classifying human actions from video sequences. Our method benefits from high parameters sharing between the two tasks by unifying still images and video clips processing in a single pipeline, and runs at more than 100 frames per second.}
}

@article{paumard20tip,
title= {"Deepzzle: Solving Visual Jigsaw Puzzles with Deep Learning and Shortest Path Optimization"},
author= {Marie-Morgane Paumard and David Picard and Hedi Tabia},
journal= {"IEEE Transactions on Image Processing"},
year= "2020",
img= {deepzzle.jpg},
doi= {https://doi.org/10.1109/TIP.2019.2963378},
tldr= {We propose a method for reassembling archaeological fragments with wide space between them even when patterns and colors continuity is mostly unusable, by training a neural network to predict the positions of the fragments despite the gaps between them and building a graph that leads to the best reassemblies from these predictions. }
}

@article{jacob20prl,
title= {"DIABLO: Dictionary-based attention block for deep metric learning"},
author= {Pierre Jacob and David Picard and Aymeric Histace and Edouard Klein},
journal= {"Pattern Recognition Letters"},
year= {"2020"},
img= {prl_jacob.jpg},
pdf= {http://pdf.org/abs/2004.14644},
doi= {https://doi.org/10.1016/j.patrec.2020.03.020},
tldr= {We propose DIABLO, a dictionary-based attention method for image embedding. DIABLO produces richer representations by aggregating only visually-related features together while being easier to train than other attention-based methods in deep metric learning. DIABLO obtains state-of-the-art performance on Cub-200-2011, Cars-196, Stanford Online Products, and In-Shop Clothes Retrieval.}
}

@inproceedings{Hampali20,
  author = {Shreyas Hampali and Mahdi Rad and Markus Oberweger and Vincent Lepetit},
  title = {{HOnnotate: A method for 3D Annotation of Hand and Object Poses}},
  booktitle = CVPR,
  year = 2020,
  pdf = {https://arxiv.org/pdf/1907.01481.pdf},
  img = {hampali_cvpr20.png},
  project = {https://www.tugraz.at/index.php?id=40231}
}

@inproceedings{Ramamonjisoa20,
  author = {Michael Ramamonjisoa and Yuming Du and Vincent Lepetit},
  title = {{Predicting Sharp and Accurate Occlusion Boundaries in Monocular Depth Estimation Using Displacement Fields}},
  booktitle = CVPR,
  year = 2020,
  note = {The two first authors have equal contributions},
  pdf = {https://arxiv.org/pdf/2002.12730.pdf},
  img = {ramamonjisoa_cvpr20.png},
  project = {https://michaelramamonjisoa.github.io/projects/DisplacementFields}
}


% 2019: %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

@article{dubois19,
  TITLE = {{Fast Algorithms for Sparse Reduced-Rank Regression}},
  AUTHOR = {Dubois, Benjamin and Delmas, Jean-Fran{\c c}ois and Obozinski, Guillaume},
  JOURNAL = {{Proceedings of Machine Learning Research (PMLR)}},
  YEAR = {2019},
  PDF = {https://hal-enpc.archives-ouvertes.fr/hal-02075623/file/865.pdf},
  img = {dubois19.png}
}

@inproceedings{jacob19iccv,
title= {"Metric Learning With HORDE: High-Order Regularizer for Deep Embeddings"},
author= {Pierre Jacob and David Picard and Aymeric Histace and Edouard Klein},
booktitle= ICCV,
pdf= {https://pdf.org/abs/1908.02735},
project= {https://github.com/pierre-jacob/ICCV2019-Horde},
img= {horde.jpg},
year = {2019},
tldr= {
We learn an effective similarity measure between image representations by introducing a regularization terms that enforces visually-close images to have deep features well localized in the feature space. Our approach obtains state-of-the-art results on Cub-200-2011, Cars-196, Stanford Online Products, and Inshop Clothes Retrieval. }
}


@inproceedings{Grabner19,
  author = {Alexander Grabner and Peter M. Roth and Vincent Lepetit},
  title = {{GP2C: Geometric Projection Parameter Consensus for Joint 3D Pose and Focal Length Estimation in the Wild}},
  booktitle = ICCV,
  year = 2019,
  pdf = {https://arxiv.org/pdf/1908.02809.pdf},
  img = {grabner_iccv19.png}
}

@inproceedings{yuan:hal-02057597,
  TITLE = {{Marginalized Average Attentional Network for Weakly-Supervised Learning}},
  AUTHOR = {Yuan, Yuan and Lyu, Yueming and Shen, Xi and Tsang, Ivor and Yeung, Dit-Yan},
  BOOKTITLE = {{ICLR 2019 - Seventh International Conference on Learning Representations}},
  YEAR = {2019},
  PDF = {https://hal-enpc.archives-ouvertes.fr/hal-02057597/file/maan.pdf},
  img = {maan.png}
}

@article{luvizon19cg,
title= {"Human pose regression by combining indirect part detection and contextual information"},
author= {Diogo Luvizon and David Picard and Hedi Tabia},
journal= {"Computers and Graphics"},
year= "2019",
pdf= {https://pdf.org/abs/1710.02322},
project= {https://github.com/dluvizon/pose-regression},
img= {luvizon19cg.png},
doi= {https://doi.org/10.1016/j.cag.2019.09.002},
tldr= {We introduce a fully differentiable framework that learns to predict heat maps for human body pose estimation indirectly, without additional steps of artificial ground truth generation. }
}


@inproceedings{Ramamonjisoa19,
  author = {Michael Ramamonjisoa and Vincent Lepetit},
  title = {{SharpNet: Fast and Accurate Recovery of Occluding Contours in Monocular Depth Estimation}},
  booktitle = {{ICCV Workshop on 3D Reconstruction in the Wild}},
  year = 2019,
  pdf = {https://arxiv.org/pdf/1905.08598.pdf},
  img = {ramamonjisoa_iccvw19.png},
  project = {https://github.com/MichaelRamamonjisoa/SharpNet}
}

@inproceedings{Pitteri19b,
  author = {Giorgia Pitteri and Slobodan Ilic and Vincent Lepetit},
  title = {{CorNet: Generic 3D Corners for 6D Pose Estimation of New Objects without Retraining}},
  booktitle = {{ICCV Workshop on Recovering 6D Object Pose}},
  year = 2019,
  pdf = {https://arxiv.org/pdf/1908.11457.pdf},
  img = {pitteri_iccvw19.png}
}

@inproceedings{shen2019discovery,
author = {Shen, Xi and Efros, Alexei A. and Aubry, Mathieu},
title = {Discovering visual patterns in art collections with spatially-consistent feature learning},
booktitle = {Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR)},
year = 2019,
pdf = {https://arxiv.org/pdf/1903.02678v2.pdf},
img = {artminer.jpg},
project = {http://imagine.enpc.fr/~shenx/ArtMiner/},
}

@inproceedings{Xiao2019PoseFromShape,
author = "Yang Xiao and Xuchong Qiu and Pierre-Alain Langlois and Mathieu Aubry and Renaud Marlet",
title = "Pose from Shape: Deep Pose Estimation for Arbitrary 3D Objects",
booktitle = BMVC,
year = "2019",
pdf = "https://arxiv.org/pdf/1906.05105.pdf",
img = "xiao_bmvc19.png",
project = "http://imagine.enpc.fr/~xiaoy/PoseFromShape/"
}

@inproceedings{Pitteri19,
  author = {Giorgia Pitteri and Michael Ramamonjisoa and Slobodan Ilic and Vincent Lepetit},
  title = {{On Object Symmetries and 6D Pose Estimation from Images}},
  booktitle = 3DV,
  year = 2019,
  pdf = {https://arxiv.org/pdf/1908.07640.pdf},
  img = {pitteri_3dv19.png},
  presentation = {Spotlight}
}

@inproceedings{langlois:hal-02344362,
  TITLE = {{Surface Reconstruction from 3D Line Segments}},
  AUTHOR = {Langlois, Pierre-Alain and Boulch, Alexandre and Marlet, Renaud},
  pdf = {https://arxiv.org/pdf/1911.00451.pdf},
  BOOKTITLE = {{2019 International Conference on 3D Vision (3DV)}},
  YEAR = {2019},
  presentation = {Oral},
  img = {langlois19.png},
}

@article{Oberweger19,
  author = {Markus Oberweger and Paul Wohlhart and Vincent Lepetit},
  title = {{Generalized Feedback Loop for Joint Hand-Object Pose Estimation}},
  journal = PAMI,
  year = 2019,
  pdf = {https://arxiv.org/pdf/1903.10883.pdf},
  img = {oberweger_pami19.png}
}

@inproceedings{groueix19cycleconsistentdeformation,
title = {Unsupervised cycle-consistent deformation for shape matching},
author = {Groueix, Thibault and Fisher, Matthew and Kim, Vladimir G. and Russell, Bryan and Aubry, Mathieu},
booktitle = {Symposium on Geometry Processing (SGP)},
year = {2019},
pdf = {https://arxiv.org/pdf/1907.03165},
project = {http://imagine.enpc.fr/~groueixt/sgp/index.html},
img = {cycle.png},
tldr = {We propose a solution to the task of putting objects of arbitrary topologies in correspondences. Matching can be solved by predicting dense deformations. In this work, we introduce a deep learning method to deform any shape into any other, and a cycle-consistent loss on pointclouds to regularize the learned deformations.},
}

@inproceedings{shen2019watermark,
author = {Shen, Xi and Pastrolin, Ilaria and Bounou, Oumayma and Gidaris, Spyros and Smith, Marc and Poncet, Olivier and Aubry, Mathieu},
title = {Large-Scale Historical Watermark Recognition: Dataset and a new consistency-based approach},
booktitle = {arXiv},
year = 2019,
pdf = {https://arxiv.org/pdf/1908.10254.pdf},
img = {watermark.png},
project = {http://imagine.enpc.fr/~shenx/Watermark/},
}

% 2018: %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

@inproceedings{groueix2018b,
title = {3D-CODED: 3D Correspondences by Deep Deformation},
author={Groueix, Thibault and Fisher, Matthew and Kim, Vladimir G. and Russell, Bryan and Aubry, Mathieu},
booktitle = {ECCV},
year = {2018},
pdf = {https://arxiv.org/pdf/1806.05228},
project = {http://imagine.enpc.fr/~groueixt/3D-CODED/index.html},
img = {3dcoded.jpg},
tldr = {Given two input shapes without vertex correspondences, the goal is to establish correspondences between them. To do so, we learn a smooth deformation transforming a template shape into the input shape. The two reconstructions are naturally in correspondences, as they span from two different deformations of the same template.},
}

@inproceedings{groueix2018,
title={{AtlasNet: A Papier-M\^ach\'e Approach to Learning 3D Surface Generation}},
author={Groueix, Thibault and Fisher, Matthew and Kim, Vladimir G. and Russell, Bryan and Aubry, Mathieu},
booktitle=CVPR,
year={2018},
pdf = {https://arxiv.org/pdf/1802.05384},
project = {http://imagine.enpc.fr/~groueixt/atlasnet/index.html},
img = {atlasnet.png},
tldr = {Instead of generating point clouds or voxels, AtlasNet directly generates meshes at arbitrary resolution, with regular texture parameterization, and generalizes well to unseen objects. We demonstrate its strength on an autoencoder, and single-view reconstruction from one still image.},
presentation = {Spotlight},
}

@inproceedings{luvizon18cvpr,
title= {"2D/3D Pose Estimation and Action Recognition using Multitask Deep Learning"},
author= {Diogo Luvizon and David Picard and Hedi Tabia},
booktitle= CVPR,
year= 2018,
pdf= {https://pdf.org/abs/1802.09232},
project= {https://github.com/dluvizon/deephar},
img= {luvizon_cvpr18.jpg},
doi= {https://doi.org/10.1109/CVPR.2018.00539},
tldr= {We propose a single architecture trained end-to-end for joint 2D and 3D pose estimation from still images and human action recognition from video sequences.}
}

@inproceedings{paumard18eccv,
title= {"Image Reassembly Combining Deep Learning and Shortest Path Problem"},
author= {Marie-Morgane Paumard and David Picard and Hedi Tabia},
booktitle= ECCV,
year= "2018",
pdf= {https://pdf.org/abs/1809.00898},
img= {eccv_puz.jpg},
doi= {https://doi.org/10.1007/978-3-030-01231-1_10},
tldr= {We propose several deep neural architectures to reassemble images from disjointed fragments, and a new dataset made of images from the Metropolitan Museum of Art (MET) for evaluation on this problem.}
}

@article{blot18neucomp,
title= {"Distributed optimization for deep learning with gossip exchange"},
author= {Michael Blot and David Picard and Nicolas Thome and Matthieu Cord},
journal= {"Neurocomputing"},
year= "2019",
pdf= {https://pdf.org/abs/1804.01852},
img= {gosgd.jpg},
doi= {https://doi.org/10.1016/j.neucom.2018.11.002},
tldr= {We introduce a distributed method called GoSGD that speeds up the training of convolutional neural networks and relies on a new way of sharing information between different threads based on gossip algorithms.}
}



@inproceedings{sbai2018design,
author ={Sbai, Othman and Elhoseiny, Mohamed and Bordes, Antoine and LeCun, Yann and Couprie, Camille},
title = {Design: Design inspiration from generative networks},
booktitle = ECCVW,
year = {2018},
pdf = {http://openaccess.thecvf.com/content_ECCVW_2018/papers/11131/Sbai_DesIGN_Design_Inspiration_from_Generative_Networks_ECCVW_2018_paper.pdf},
img = {sbai2018design.png},
tldr = {We train a network generator to generate images of new ready-to-wear clothes.}
}

@inproceedings{paumard18icip,
title= {"Jigsaw Puzzle Solving Using Local Feature Co-Occurrences in Deep Neural Networks"},
author= {Marie-Morgane Paumard and David Picard and Hedi Tabia},
booktitle= ICIP,
year= "2018",
pdf= {https://pdf.org/abs/1807.03155},
img= {icip_puz.jpg},
doi= {https://doi.org/10.1109/ICIP.2018.8451094},
tldr= {We propose a classification method that can solve jigsaw puzzles, and show its application to object reconstruction for archaeology.}
}

@inproceedings{jacob18icip,
title= {"Leveraging Implicit Spatial Information in Global Features for Image Retrieval"},
author= {Pierre Jacob and David Picard and Aymeric Histace and Edouard Klein},
booktitle= ICIP,
year= "2018",
pdf= {https://pdf.org/abs/1806.08991},
img= {ista.jpg},
doi= {https://doi.org/10.1109/ICIP.2018.8451817},
tldr= {We propose an image retrieval method that integrates
relative spatial information into the standard aggregation process.}
}


@inproceedings{carvalho18sigir,
title= {"Cross-Modal Retrieval in the Cooking Context: Learning Semantic Text-img Embeddings"},
author= {Micael Carvalho and R\'emi Cad\`ene and David Picard and Laure Soulier and Nicolas Thome and Matthieu Cord},
booktitle= {"ACM SIGIR Conference on Research and Development in Information Retrieval"},
year= "2018",
pdf= {https://pdf.org/abs/1804.11146},
img= {sigir18.jpg},
doi= {https://doi.org/10.1145/3209978.3210036},
tldr= {We propose a cross-modal retrieval model aligning visual and textual data such as pictures of dishes and their recipes in a shared representation space.}
}

@inproceedings{sbai2018vector,
author ={Sbai, Othman and Couprie, Camille and Aubry, Mathieu},
title = {Unsupervised Image Decomposition in Vector Layers},
booktitle = ARXIV,
year = {2018},
pdf = {https://arxiv.org/abs/1812.05484},
project = {http://imagine.enpc.fr/~sbaio/pix2vec/},
img = {http://imagine.enpc.fr/~sbaio/pix2vec/img/pix2vec2/teaser.jpg},
tldr = {We propose a vectorized image decomposition and generation model that is learned in an unsupervised manner and allows to obtain a learned mask space that is useful for image editing and clustering tasks.}
}

@article{groueix:hal-02178969,
  TITLE = {{Unsupervised cycle-consistent deformation for shape matching}},
  AUTHOR = {Groueix, Thibault and Fisher, Matthew and Kim, Vladimir G. and Russell, Bryan C. and Aubry, Mathieu},
  pdf = {https://arxiv.org/pdf/1907.03165.pdf},
  JOURNAL = {{Computer Graphics Forum}},
  VOLUME = {38},
  NUMBER = {5},
  PAGES = {123-133},
  YEAR = {2019},
  img = {groueix19.png},
}

@article{fu:hal-02086416,
  TITLE = {{MoE-SPNet: A mixture-of-experts scene parsing network}},
  AUTHOR = {Fu, Huan and Gong, Mingming and Wang, Chaohui and Tao, Dacheng},
  URL = {https://hal.archives-ouvertes.fr/hal-02086416},
  JOURNAL = {{Pattern Recognition}},
  pdf = {https://arxiv.org/pdf/1806.07049.pdf},
  YEAR = {2018},
  img = {fu18.png}
}

%@phdthesis{simonovsky:tel-01990372,
%  TITLE = {{Deep Learning on Attributed Graphs}},
%  AUTHOR = {Simonovsky, Martin},
%  SCHOOL = {{Universit{\'e} Paris-Est}},
%  YEAR = {2018},
%  PDF = {https://hal.archives-ouvertes.fr/tel-01990372/file/thesis.pdf},
%  img = {simonovsky18.png}
%}

%@phdthesis{briand:tel-01980492,
%  TITLE = {{Image Formation from a Large Sequence of RAW Images: Performance and Accuracy}},
%  AUTHOR = {Briand, Thibaud},
%  SCHOOL = {{Universit{\'e} Paris-Est}},
%  YEAR = {2018},
%  PDF = {https://pastel.archives-ouvertes.fr/tel-01980492/file/TH2018PESC1017.pdf},
%  img = {briand18.png}
%}

@inproceedings{simonovsky:hal-01990381,
  TITLE = {{GraphVAE: Towards Generation of Small Graphs Using Variational Autoencoders}},
  AUTHOR = {Simonovsky, Martin and Komodakis, Nikos},
  BOOKTITLE = {{27th International Conference on Artificial Neural Networks (ICANN)}},
  YEAR = {2018},
  PDF = {https://hal.archives-ouvertes.fr/hal-01990381/file/icann_paper_long.pdf},
  img = {simonovsky18.png}
}

@inproceedings{neveu:hal-01927682,
  TITLE = {{An Interval Branch and Bound Algorithm for Parameter Estimation and Application to Stereovision}},
  AUTHOR = {Neveu, Bertrand and De La Gorce, Martin and Monasse, Pascal and Trombettoni, Gilles},
  BOOKTITLE = {{LeGO: Leiden Global Optimization}},
  YEAR = {2018},
  PDF = {https://hal-enpc.archives-ouvertes.fr/hal-01927682/file/gow18_bbestim_final.pdf},
  img = {neveu18.png}
}

%@article{oyallon:hal-01837587,
%  TITLE = {{Scattering Networks for Hybrid Representation Learning}},
%  AUTHOR = {Oyallon, Edouard and Zagoruyko, Sergey and Huang, Gabriel and Komodakis, Nikos and Lacoste-Julien, Simon and Blaschko, Matthew and Belilovsky, Eugene},
%  JOURNAL = {{IEEE Transactions on Pattern Analysis and Machine Intelligence}},
%  YEAR = {2018},
%  PDF = {https://hal.inria.fr/hal-01837587/file/main.pdf},
%}

@inproceedings{monasse:hal-02168487,
  TITLE = {{A Root-to-Leaf Algorithm Computing the Tree of Shapes of an Image}},
  AUTHOR = {Monasse, Pascal},
  URL = {https://hal-enpc.archives-ouvertes.fr/hal-02168487},
  BOOKTITLE = {{Workshop on Reproducible Research in Pattern Recognition}},
  ADDRESS = {Beijing, China},
  YEAR = {2018},
  MONTH = Aug,
  DOI = {10.1007/978-3-030-23987-9\_3},
  PDF = {https://hal-enpc.archives-ouvertes.fr/hal-02168487/file/flst.pdf},
}

`;