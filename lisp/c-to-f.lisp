(defun main ()
  	(let*
  		(
			(size 0)
         	(growSpeed 0)
			(iterationCount 0)
		)
		(format t "~%Initial: ")
		(setq size (read))
		(format t "~%Grow Speed: ")
		(setq growSpeed (read))
		(format t "~%Iteration Count: ")
		(setq iterationCount (read))

		(loop while (>= (decf iterationCount) 0)
			do (format t
				"~%Size is ~s with ~s iterations to go~%"
				size
				iterationCount
			)  		;;
			(setq size (* size growSpeed))
	   )
	)
)

(main)
