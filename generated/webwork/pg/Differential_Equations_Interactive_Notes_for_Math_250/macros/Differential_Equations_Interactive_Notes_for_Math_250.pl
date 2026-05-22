#############################################################################
# This macro library supports WeBWorK problems from the PreTeXt project named
# Differential Equations: Interactive Notes for Math 250
#############################################################################


# Return a string containing the latex-image-preamble contents.
# To be used by LaTeXImage objects as in:
# $image->addToPreamble(latexImagePreamble())

sub latexImagePreamble {
return <<'END_LATEX_IMAGE_PREAMBLE'
\usepackage{tikz, pgfplots} \usetikzlibrary{positioning,matrix,arrows} \usetikzlibrary{shapes,decorations,shadows,fadings,patterns} \usetikzlibrary{decorations.markings}

END_LATEX_IMAGE_PREAMBLE
}
